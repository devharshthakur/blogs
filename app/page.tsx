export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
      <h1 className="mb-5 text-7xl font-bold tracking-tighter">Welcome to My Blog</h1>
      <p className="text-muted-foreground max-w-500px mx-auto mb-15 max-w-3xl leading-relaxed tracking-tighter">
        A personal space where I share my thoughts, coding adventures, and insights on technology
        and design.
      </p>
    </div>
  );
}
