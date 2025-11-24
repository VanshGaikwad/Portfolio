
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
      <h2 className="font-bold text-4xl text-white">All Projects</h2>
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Counter App",
    description: "A simple and stylish Counter App built using React.",
    header: (
      <ItemImage
        src="/images/best-projects/counter.png"
        href="https://counter-app-pi-liard.vercel.app/"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "News App",
    description: "News App is a fast, modern and visually stunning real-time News Application.",
    header: (
      <ItemImage
        src="/images/best-projects/news.png"
        href="https://news-app-delta-kohl.vercel.app/"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Recipe App",
    description: "A simple and clean Recipes Website built using React.",
    header: (
      <ItemImage
        src="/images/best-projects/recipe.png"
        href="https://recipes-website-iota.vercel.app/"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Assignment Tracker",
    description:
      "A simple, clean, and responsive web application for managing academic assignments.",
    header: (
      <ItemImage
        src="/images/best-projects/assignment-tracker.png"
        href="https://assignment-tracker-subject-project.vercel.app/"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Memory Game",
    description: "A simple and fun memory game built with React and Vite. Test your memory by matching pairs of cards!",
    header: (
      <ItemImage
        src="/images/best-projects/memory-game.png"
        href="https://69197f7e872fbccd34a26a0c--soft-pavlova-b1122e.netlify.app/"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "File Sharing App",
    description: "A modern and secure File Sharing Web Application built using the MERN stack.",
    header: (
      <ItemImage
        src="/images/best-projects/file-sharing.png"
        href="https://file-sharing-app-vtsk.onrender.com/"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Portfolio Website",
    description: "A clean and modern Next.js portfolio showcasing my projects, skills, and work with a fast, responsive UI.",
    header: (
      <ItemImage
        src="/images/best-projects/portfolio.png"
        href="#"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
  }
];