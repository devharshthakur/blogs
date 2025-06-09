import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default async function HomePage() {
  const posts = await getAllPosts();
  const top3Posts = posts.slice(0, 3);

  return (
    <main className="container mx-auto">
      <section className="flex items-center justify-center">
        <div className="mt-75 grid">
          {top3Posts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blogs/${post.frontmatter.slug}`}
              className="group block py-3 transition-all duration-200 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-muted-foreground hover:text-foreground group-hover:border-muted-foreground flex items-center space-x-1 border-transparent text-lg font-light tracking-wide transition-colors duration-300">
                  <span className="font-semibold">{post.frontmatter.title}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </h2>
              </div>
            </Link>
          ))}
          {posts.length > 3 && (
            <div className="mt-3 text-center">
              <Link href="/blog">
                <Button size={'lg'} variant={'link'}>
                  <span className="font-normal">View All Posts</span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
