// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface DoctorProfile {
  name: string;
  position: string;
  specialty: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: number;
  title: string;
  content: string;
  petName: string;
  petType: string;
  treatmentType: string;
  date: string;
}