import React from 'react';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const header = () => {
  return (
    <header className="flex w-full items-center justify-end space-x-5 p-4 text-center font-bold">
      <div className="items-center gap-4">
        <Button variant="outline" size="default" asChild className="border-2 border-zinc-600">
          <Link href="/about">
            <span className="p-0">About</span>
          </Link>
        </Button>
      </div>
      <div className="items-center gap-4">
        <Button variant="outline" size="default" asChild className="border-2 border-zinc-600">
          <a
            href="https://github.com/devharshthakur/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-4 w-4" />
            <span className="text-center">repo</span>
          </a>
        </Button>
      </div>
      <div>
        <ThemeToggle className="border-2 border-zinc-600" />
      </div>
    </header>
  );
};

export default header;
