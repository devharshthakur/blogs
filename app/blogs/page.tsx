import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
  const posts = await getAllPosts();
  const top3Posts = posts.slice(0, 3);

  return (
    <main className="container mx-auto">
      <section className="flex items-center justify-center">
        <div className="mt-64 grid">
          {top3Posts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blogs/${post.frontmatter.slug}`}
              className="group block py-3 transition-all duration-200 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-muted-foreground hover:text-foreground group-hover:border-muted-foreground border-transparent text-lg font-light tracking-wide transition-colors duration-200">
                  {post.frontmatter.title}
                </h2>
              </div>
            </Link>
          ))}
          <div className="mt-3 text-center">
            <Link href="/blog">
              <Button size={'lg'} variant={'link'}>
                <span className="font-semibold">View All Posts</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
