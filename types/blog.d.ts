export interface FrontMatter {
  title: string;
  date: string; // ISO 8601 string, e.g., '2023-10-27'
  description: string;
  slug: string;
  tags?: string[];
  image?: string;
}

export interface Post {
  frontmatter: FrontMatter;
  content: string;
}
