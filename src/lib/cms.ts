export const CMS_BASE_URL = import.meta.env.VITE_CMS_BASE_URL || '';

export interface BlogPost {
  id: number;
  title: string;
  summary?: string;
  content?: string;
}

export interface CareerPost {
  id: number;
  title: string;
  location?: string;
  description?: string;
}

export interface Partner {
  id: number;
  name: string;
  description?: string;
}

async function fetchJson<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${CMS_BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export const fetchBlogPosts = () => fetchJson<BlogPost[]>('/api/blogs');
export const fetchCareerPosts = () => fetchJson<CareerPost[]>('/api/careers');
export const fetchPartners = () => fetchJson<Partner[]>('/api/partners');

export const fetchBlogPost = (id: string) =>
  fetchJson<BlogPost>(`/api/blogs/${id}`);

export const fetchCareerPost = (id: string) =>
  fetchJson<CareerPost>(`/api/careers/${id}`);

export const fetchPartner = (id: string) =>
  fetchJson<Partner>(`/api/partners/${id}`);
