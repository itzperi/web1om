import React from 'react';
import { FileText, BookOpen, Monitor, ShoppingCart, GraduationCap } from 'lucide-react';
import { TabData, ImpactResource } from './types';

export const NAV_LINKS = [
  "Academic & Government",
  "Health",
  "Industry",
  "Insights",
  "About",
  "Support"
];

export const HERO_TABS: TabData[] = [
  {
    id: 'publish',
    label: 'Publish with us',
    icon: <FileText className="w-5 h-5" />,
    content: [
      { title: "Publish your article in a journal", description: "Find out how to submit your manuscript and bring your research to the global community." },
      { title: "Publish a book", description: "Explore how we can collaborate to bring your book to the world." },
      { title: "Resources for Editors", description: "Find useful tools and resources to support you in your role as an editor with Elsevier." },
      { title: "Resources for Reviewers", description: "Find support, tools and guidance for manuscript review." },
    ]
  },
  {
    id: 'find',
    label: 'Find journal articles',
    icon: <BookOpen className="w-5 h-5" />,
    content: [
      { title: "Articles on ScienceDirect", description: "Search for peer-reviewed journal articles and book chapters including open access content." },
      { title: "Journal catalog", description: "Browse through over 2,900 Elsevier titles across all areas of science." },
      { title: "Journal Finder", description: "Match your abstract to journals where your manuscript is most likely to be sent to peer review." },
      { title: "Call for papers", description: "Find more opportunities to publish your research." },
    ]
  },
  {
    id: 'products',
    label: 'Discover products',
    icon: <Monitor className="w-5 h-5" />,
    content: [
      { title: "ScienceDirect", description: "Leading database of trusted, peer-reviewed, full-text, scientific, technical and health literature." },
      { title: "Scopus", description: "Comprehensive, multidisciplinary, trusted abstract and citation database." },
      { title: "ClinicalKey", description: "Provides evidence-based clinical content with conversational search, powered by generative AI." },
      { title: "View all products", description: "Research, data and education products to support you and help you meet your objectives." },
    ]
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: <ShoppingCart className="w-5 h-5" />,
    content: [
      { title: "Browse scientific books & journals", description: "Discover and buy leading reference, textbooks and journals across health and science subject areas." },
      { title: "Visit your dedicated health store", description: "Books, clinics and journals in medicine, nursing and health professions for practice and education." },
      { title: "Shop Elsevier Digital", description: "Get AI-powered, evidence-based tools and resources for physicians, students and practitioners." },
      { title: "Discover award-winning books", description: "Explore books recognized for outstanding contributions to Science, Technology and Health literature." },
    ]
  },
  {
    id: 'learning',
    label: 'Learning resources',
    icon: <GraduationCap className="w-5 h-5" />,
    content: [
      { title: "Researcher Academy", description: "Free e-learning modules developed by global experts." },
      { title: "Scopus Academy", description: "Self-paced introductory training for researchers and students." },
      { title: "Resources for Medical Students", description: "Interactive solutions and cutting-edge visuals to enhance the learning experience." },
      { title: "Resources for Nursing Students", description: "Study and learn more effectively with nursing education products." },
    ]
  }
];

export const IMPACT_RESOURCES: ImpactResource[] = [
  { category: 'Academic & Government', title: 'Researcher & Author', role: 'Researcher & Author', description: "Expert guidance and resources to help you advance your research." },
  { category: 'Academic & Government', title: 'Librarian', role: 'Librarian', description: "Access tools, data and analytics you need to enhance your impact." },
  { category: 'Academic & Government', title: 'Academic Leader', role: 'Academic Leader', description: "Resources and solutions to help you develop research strategies, collaborate and showcase impact." },
  { category: 'Academic & Government', title: 'Funder', role: 'Funder', description: "Discover resources to support your strategy, planning and evaluation of funding activities." },
];
