import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import { useMDXComponents } from '@/mdx-components';
import type { Post } from '@/types/blog';

interface IndividualPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function IndividualPostPage({ params }: IndividualPostPageProps) {
  const { slug } = await params;
  const post: Post | null = await getPostBySlug(slug);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const components = useMDXComponents({});

  if (!post) {
    return <div>Post not found!</div>;
  }

  const { title } = post.frontmatter;

  return (
    <article className="container mx-auto my-8 max-w-5xl p-10">
      <header className="mb-8 text-center">
        <h1 className="mb-5 text-5xl leading-tight font-extrabold tracking-tighter md:text-6xl">
          {title}
        </h1>
      </header>
      <div className="prose prose-lg dark:prose-invert mx-auto my-auto mt-13 max-w-4xl pb-2 tracking-tight dark:text-zinc-300">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrismPlus, { showLineNumbers: true }]],
            },
          }}
          components={components}
        />
      </div>
    </article>
  );
}
