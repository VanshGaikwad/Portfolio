"use client";

import { Tabs } from "./ui/tabs";
import Image from "next/image";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Scriptify AI",
      value: "scriptify",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>AI Video Script Generator</p>
          <ImageContainer
           src="/images/best-projects/scriptify.png"
            href="https://scriptify-app.netlify.app/"
            
          />
        </div>
      ),
    },
    {
      title: "Smart Movie Search",
      value: "movies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Movie Finder App using API</p>
          <ImageContainer
            src="/images/best-projects/movie.png"
            href="https://precious-lamington-05bd75.netlify.app/"
          />
        </div>
      ),
    },
    {
      title: "Chrome Extension",
      value: "extension",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Language Learner</p>
          <ImageContainer
            src="/images/best-projects/chrome-extension.png"
            href="https://github.com/VanshGaikwad/Chrome_Extension"
          />
        </div>
      ),
    },
    {
      title: "Chat App",
      value: "chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Realtime Chat Application</p>
          <ImageContainer
            src="/images/best-projects/chat-app.png"
            href="https://github.com/VanshGaikwad/Chat-application"
          />
        </div>
      ),
    },
    
    {
      title: "AI Object Detector",
      value: "aiobject",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Real-time Object Detection</p>
          <ImageContainer
            src="/images/best-projects/ai-object1.jpeg"
            href="https://ai-object-detector-seven-sigma.vercel.app/"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Best Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="project preview"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
    </Link>
  );
}