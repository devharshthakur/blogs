import { Button } from '@/components/ui/button';
import { Notebook, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
      <div>
        <h1 className="mb-2 text-9xl font-bold tracking-wide">Welcome</h1>
      </div>
      <p className="text-muted-foreground mx-auto mb-7 max-w-[500px] text-lg leading-relaxed tracking-tighter">
        A personal space where I share my thoughts, coding adventures, and insights on technology
        and design.
      </p>
      <Link href={'/blogs'} className="cursor-pointer hover:opacity-90">
        <Button className="flex items-center gap-2 transition-all duration-300">
          <Notebook className="h-4 w-4" />
          <span>View Blogs</span>
        </Button>
      </Link>
    </div>
  );
}
