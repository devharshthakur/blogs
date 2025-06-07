import React from 'react';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const header = () => {
  return (
    <div className="sticky top-0 flex w-full items-center justify-end space-x-5 p-4 text-center font-bold">
      <div className="items-center gap-4">
        <Button variant="outline" size="default" asChild>
          <Link href="/about">
            <span className="p-0">About</span>
          </Link>
        </Button>
      </div>
      <div className="items-center gap-4">
        <Button variant="outline" size="default" asChild>
          <a href="https://github.com/devharshthakur/blog" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-4 w-4" />
            <span className="text-center">repo</span>
          </a>
        </Button>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default header;
