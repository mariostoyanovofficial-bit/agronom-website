// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  specialties: string[];
}

// Portfolio/Activity types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  location?: string;
  date?: string;
}

// Announcement types
export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Partner types
export interface Partner {
  id: string;
  name: string;
  logo?: string;
  description: string;
  testimonial?: string;
  link?: string;
}

// Contact types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
