
import { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface TikTok {
  id: number;
  tiktokUrl: string; // zamiast imageUrl
  caption: string;
  views: string;
}