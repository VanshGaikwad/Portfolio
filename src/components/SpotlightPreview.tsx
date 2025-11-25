import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/96 antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
          "bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 flex flex-col justify-center items-center text-center min-h-screen md:min-h-160">
        <h1
          className="bg-opacity-50 bg-gradient-to-b
 from-neutral-50 to-neutral-400 bg-clip-text 
text-3xl font-bold text-transparent leading-snug
sm:text-4xl md:text-7xl"
        >
          Vansh Gaikwad <br /> Software Developer
        </h1>

        <p
          className="mt-4 max-w-sm text-sm font-normal text-neutral-300 
          sm:text-base sm:max-w-md md:max-w-lg px-3"
        >
          Skilled in Java, DSA, ReactJS, NextJS, and TypeScript; focused on
          building fast, scalable web applications with clean architecture,
          optimized logic, and efficient state management.
        </p>
      </div>
    </div>
  );
}
