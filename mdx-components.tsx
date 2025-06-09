import type { MDXComponents } from 'mdx/types';
import { Button } from './components/ui/button';
import { Check, Copy } from 'lucide-react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: ({ children, ...props }) => (
      <p className="mb-6 leading-relaxed text-gray-700 last:mb-0 dark:text-gray-300" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="flex-col leading-relaxed font-medium" {...props}>
        {children}
      </ul>
    ),
    code: ({ children, className }) => {
      // If className exists, it's a code block (pre > code)
      if (className) {
        const language = className.replace('language-', '');
        return <code className={`${className} block`}>{children}</code>;
      }

      // Otherwise it's inline code
      return (
        <code className="relative rounded border border-gray-200 bg-gray-100 px-[0.3rem] py-[0.2rem] text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
          {children}
        </code>
      );
    },
  };
}
