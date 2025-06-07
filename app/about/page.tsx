import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
        <p className="text-8xl font-bold tracking-tight">About Page</p>
        <p className="text-muted-foreground leading-tighter pt-3 text-xl leading-relaxed font-semibold">
          This page contains information about who i am
        </p>
      </div>
    </div>
  );
};

export default About;
