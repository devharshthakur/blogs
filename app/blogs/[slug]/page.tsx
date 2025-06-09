import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import { useMDXComponents } from '@/mdx-components';

interface IndividualPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function IndividualPostPage({ params }: IndividualPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const components = useMDXComponents({});

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <article className="container mx-auto max-w-5xl">
      <header className="mt-5 mb-12 text-center">
        <h1 className="text-6xl leading-tight font-extrabold tracking-tighter">
          {post.frontmatter.title}
        </h1>
      </header>
      {/* Render MDX content */}
      <div className="prose dark:prose-invert mx-auto mt-5 max-w-4xl pb-7 text-lg leading-7 dark:text-zinc-300">
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
