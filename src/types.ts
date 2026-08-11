export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: {
    text: string;
    type: 'users' | 'camera' | 'json' | 'design';
  };
  gradient: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  isLive: boolean;
  featured: boolean;
}

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  icon: string;
  color: string;
  url: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface WritingArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  url?: string;
  thumbnail?: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  status: 'Reading' | 'Completed' | 'To Read';
  rating?: string;
  notes?: string;
  searchUrl?: string;
}

export interface FavoriteItem {
  id: string;
  category: 'Books' | 'Movies' | 'Games' | 'TV Shows' | 'Movies & TV Shows' | string;
  title: string;
  creator?: string;
  year?: string;
  coverUrl?: string;
  backupCoverUrl?: string;
  coverUrls?: string[];
  description: string;
  url?: string;
  rating?: string;
}

export interface BucketListItem {
  number: number;
  title: string;
  completed?: boolean;
}

export interface BucketListSection {
  category: string;
  items: BucketListItem[];
}

export interface TopTenItem {
  rank: number;
  name: string;
  image: string;
  subtitle?: string;
  link?: string;
}

export interface TopTenCategory {
  id: string;
  title: string;
  description: string;
  items: TopTenItem[];
}

export interface VibeItem {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
  category: string;
  isCustom?: boolean;
  addedAt?: string;
  sourceUrl?: string;
  mediaType?: 'image' | 'video';
  customType?: 'reddit-comment' | 'chan-post' | 'wiki-snippet' | 'dark-snippet';
  textQuote?: string;
  author?: string;
}


