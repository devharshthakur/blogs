import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div>
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
        <div className="w-full max-w-2xl">
          <div className="mb-5 flex flex-col items-center">
            <Image
              width={130}
              height={130}
              src={'/pfp.jpeg'}
              alt="Profile Picture"
              className="rounded-full border-3 border-zinc-300"
            />
          </div>
          <div className="text-center">
            <h2 className="mb-4 text-7xl font-extrabold tracking-tighter">Harsh Thakur</h2>
            <p className="text-foreground mb-4 max-w-2xl text-xl tracking-tighter">
              Software Engineer & Final Year Computer Engineering Student
            </p>
            <p className="text-foreground text-sm leading-relaxed font-medium tracking-widest">
              I am a full-stack web developer based in Mumbai, India, currently in my final year at
              Vidyalankar Institute of Technology. My passion lies at the intersection of technology
              and design, and I specialize in crafting modern web applications using Next.js, React,
              and TypeScript. I am driven by a curiosity to understand how robust systems are built
              and deployed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
