import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: ({ children, ...props }) => (
      <p className="mb-6 leading-relaxed text-gray-700 last:mb-0 dark:text-gray-100" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="flex-col leading-relaxed" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li className="flex-col leading-relaxed font-light" {...props}>
        {children}
      </li>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="overflow-x-auto rounded-lg bg-gray-50 text-sm leading-relaxed shadow-inner dark:bg-gray-800"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }) => {
      return (
        <code className="text-md font-mono" {...props}>
          {children}
        </code>
      );
    },
  };
}
