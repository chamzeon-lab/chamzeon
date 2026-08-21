import express from "express";
import { createServer as createViteServer } from "vite";
import AdmZip from "adm-zip";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 프로젝트 전체 파일을 ZIP으로 압축하여 다운로드하는 API
  app.get("/api/download-project", (req, res) => {
    try {
      const zip = new AdmZip();
      const rootDir = process.cwd();
      
      // 제외할 디렉토리 및 파일
      const excludeList = ["node_modules", ".git", "dist", ".next"];

      const files = fs.readdirSync(rootDir);
      
      files.forEach(file => {
        if (!excludeList.includes(file)) {
          const fullPath = path.join(rootDir, file);
          const stats = fs.statSync(fullPath);
          
          if (stats.isDirectory()) {
            zip.addLocalFolder(fullPath, file);
          } else {
            zip.addLocalFile(fullPath);
          }
        }
      });

      const zipBuffer = zip.toBuffer();
      
      res.set({
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=project_files.zip",
        "Content-Length": zipBuffer.length,
      });
      
      res.send(zipBuffer);
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).send("Failed to generate zip file");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
