'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Post } from '@/types/blog';

type BlogListProps = {
  posts: Post[];
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  if (posts.length <= 3) {
    // Center the posts title since blog has three posts to be rendered
    const post = posts[0];
    return (
      <main className="flex min-h-[90vh] items-center justify-center-safe">
        <Link
          href={`/blogs/${post.frontmatter.slug}`}
          className="block py-3 transition-all duration-200 hover:scale-105"
        >
          <h2 className="flex items-center space-x-3 text-2xl font-semibold tracking-wide transition-colors">
            <span>{post.frontmatter.title}</span>
          </h2>
        </Link>
      </main>
    );
  }
  // If no of blog post is more than 3
  const postsToShow = showAll ? posts : posts.slice(0, 3);

  return (
    <main className="container mx-auto">
      <section className="flex content-center items-center justify-center">
        <div className="mx-auto mt-88 w-full max-w-xl">
          {postsToShow.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blogs/${post.frontmatter.slug}`}
              className="group block py-3 transition-all duration-200 hover:scale-105"
            >
              <div className="flex-col items-center text-center">
                <h2 className="hover:text-foreground flex items-center space-x-2 text-2xl tracking-wide transition-colors">
                  <span className="font-semibold">{post.frontmatter.title}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </h2>
              </div>
            </Link>
          ))}
          {posts.length > 3 && !showAll && (
            <div className="mt-3 text-center">
              <Button size={'lg'} variant={'link'} onClick={() => setShowAll(true)}>
                <span className="font-normal">View All Posts</span>
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogList;
