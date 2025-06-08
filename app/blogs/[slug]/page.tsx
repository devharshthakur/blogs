import { getPostSlugs, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';

interface IndividualPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function IndividualPostPage({ params }: IndividualPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <article>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>Published on: {post.frontmatter.date}</p>
        <p>{post.frontmatter.description}</p>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div>
            {post.frontmatter.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </header>
      {/* Render MDX content */}
      <div>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrismPlus, { showLineNumbers: false }]],
            },
          }}
        />
      </div>
    </article>
  );
}
