import { Button } from '@/components/ui/button';
import { Notebook } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-9xl font-bold tracking-tighter">Welcome</h1>
      <p className="text-muted-foreground mx-auto mb-7 max-w-120 leading-relaxed tracking-tighter">
        A personal space where I share my thoughts, coding adventures, and insights on technology
        and design.
      </p>
      <Link href={'/blogs'} className="cursor-pointer hover:opacity-90">
        <Button className="flex items-center">
          <Notebook className="h-4 w-4" />
          <span>View Blogs</span>
        </Button>
      </Link>
    </div>
  );
}
