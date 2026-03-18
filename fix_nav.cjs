const fs = require('fs');
const files = [
  'location.html', 'stemcell-atopy.html', 'pricing.html', 'neutering-reviews.html', 
  'notice.html', 'index.html', 'neutering-cost.html', 'patella.html', 
  'tv-appearance.html', 'neutering-micro-incision.html', 'stemcell.html', 
  'clinic-hours.html', 'stemcell-mou.html', 'neutering-photos.html', 
  'neutering-care.html', 'stemcell-neutering.html', 'neutering-process.html'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // We need to replace the first and second navItems.forEach.
  // We can split by `navItems.forEach` and reconstruct.
  const parts = content.split(/navItems\.forEach\([^\{]+\{[\s\S]*?\}\);/);
  
  if (parts.length === 3) {
    const newContent = parts[0] + `navItems.forEach(item => {
                if (item.classList.contains('text-amber-500')) { item.classList.remove('text-amber-500'); item.classList.add('text-amber-600'); }
                else { item.classList.remove('text-white', 'text-white/90'); item.classList.add('text-slate-900'); }
            });` + parts[1] + `navItems.forEach(item => {
                if (item.classList.contains('text-amber-600')) { item.classList.remove('text-amber-600'); item.classList.add('text-amber-500'); }
                else { item.classList.add('text-white'); item.classList.remove('text-slate-900', 'text-slate-800'); }
            });` + parts[2];
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file} - did not find exactly 2 matches`);
  }
});
