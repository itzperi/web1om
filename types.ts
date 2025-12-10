import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TabData {
  id: string;
  label: string;
  icon: ReactNode;
  content: CardData[];
}

export interface CardData {
  title: string;
  description: string;
  linkText?: string;
}

export interface ImpactResource {
  category: 'Academic & Government' | 'Health' | 'Industry';
  title: string;
  role: string;
  description: string;
}
