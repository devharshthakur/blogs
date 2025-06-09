import { getPostSlugs, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useMDXComponents } from '@/mdx-components';

interface IndividualPostPageProps {
  params: { slug: string };
}

export default async function IndividualPostPage({ params }: IndividualPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const components = useMDXComponents({});

  return (
    <article className="container mx-auto max-w-5xl">
      <header className="mt-6 mb-7 text-center">
        <h1 className="text-5xl leading-tight font-extrabold tracking-tighter">
          {post.frontmatter.title}
        </h1>
        <p className="text-foreground m-3 text-sm">Published on: {post.frontmatter.date}</p>
        <p className="mx-auto mt-4 max-w-5xl text-lg">{post.frontmatter.description}</p>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div>
            {post.frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>
      <Separator className="my-8" />
      {/* Render MDX content */}
      <div className="prose prose-zinc dark:prose-invert mx-auto max-w-none leading-relaxed dark:text-zinc-200">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrismPlus, { showLineNumbers: false }]],
            },
          }}
          components={components}
        />
      </div>
    </article>
  );
}
