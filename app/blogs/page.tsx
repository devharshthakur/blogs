import { getAllPosts } from '@/lib/mdx';
import { Post } from '@/types/blog';
import BlogList from './BlogList';

export default async function HomePage() {
  const posts: Post[] = await getAllPosts();
  return <BlogList posts={posts} />;
}
