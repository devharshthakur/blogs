import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { FrontMatter, Post } from '@/types/blog';

const POST_DIR = path.join(process.cwd(), 'posts');

export async function getPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POST_DIR);
  const slugs = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
  return slugs;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POST_DIR, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const frontmatter = data as FrontMatter;
    return {
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(POST_DIR, `${slug}.mdx`);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return {
        frontmatter: {
          ...(data as FrontMatter),
          slug,
        },
        content: '',
      };
    })
  );
  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
  return posts;
}
