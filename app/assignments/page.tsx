"use client";
import React from "react";
import { useState } from "react";
import { NaviBar } from "@/components/NaviBar";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { title } from "process";

export default function Assignments() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [navHover, setNavHover] = useState<boolean>(false);

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
  );
  const SkeletonVideo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800">
      <a
        className="h-full w-full text-center align-middle"
        href="https://youtu.be/F0ttyo85A9Y?si=Cr2dntt_2NQ7Ikew"
      >
        Click for link to video, Video demo also in repo
      </a>
    </div>
  );
  const items = [
    {
      title: "Assignment 4",
      description: "A webapp that demonstrates LSA using a search engine.",
      header: <SkeletonVideo />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-4",
    },
    {
      title: "Assignment 5",
      description: "Kaggle competition :^(",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-5",
    },
    {
      title: "Midterm Competition",
      description: "It's joeover",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-midterm",
    },
    {
      title: "Assignment 6",
      description: "Interactive linear regression web app",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-6",
    },
    {
      title: "Assignment 7",
      description: "Interactive linear regression web app",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-7",
    },
    {
      title: "Assignment 8",
      description: "Logistic regression cluster shift experiment web app",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-8",
    },
    {
      title: "Assignment 9",
      description: "Visualizing Neural Networks with python webapp",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-9",
    },
    {
      title: "Assignment 10",
      description: "Semantic Image Search with text and or images",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-10",
    },
  ];

  return (
    <div className="futura w-screen h-screen flex flex-col relative">
      <header className="flex z-100 animate-intro-shrink bg-[#3c3836]">
        {/* Can use a loop to render this later I think */}
      </header>
      <NaviBar
        setHoveredItem={setHoveredItem}
        setNavHover={setNavHover}
        navHover={navHover}
        hoveredItem={hoveredItem}
      />
      <main
        className={`font-futura bg-gruv-bg0-h z-50 overflow-scroll relative h-full flex flex-col justify-center`}
      >
        <BackgroundBeamsWithCollision className={"h-full md:h-full dark"}>
          {navHover && (
            <div className="absolute futura flex flex-col justify-center items-center w-full h-full z-30 backdrop-blur-lg text-5xl font-bold text-gruv-fg0">
              <h1 className="tracking-in-expand">{hoveredItem}</h1>
            </div>
          )}

          <BentoGrid className="max-w-4xl mx-auto z-20">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                github={item.github}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </BackgroundBeamsWithCollision>
      </main>
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
