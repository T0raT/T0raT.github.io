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
  const items = [
    {
      title: "Assignment 0",
      description: "CS506 dummy assignment! Hopefully this page is visible :)",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-0",
    },
    {
      title: "Assignment 1",
      description:
        "Using numpy, Matplotlib and pandas to find the most optimal position to get in a CDS elevator 😎",
      header: <Skeleton />,
      icon: "",
      github: "https://github.com/T0raT/tigerliu-assignment-1",
    },
    {
      title: "Assignment 2",
      description:
        "Dynamic webapp that allows the user to step through K-Means visualization",
      header: <Skeleton />,
      github: "https://github.com/T0raT/tigerliu-assignment-2",
    },
    {
      title: "Assignment 3",
      description:
        "Using numpy and sklearn to visualize and analyze SVD dimensionality reduction.",
      header: <Skeleton />,
      github: "https://github.com/T0raT/tigerliu-assignment-3",
    },
    {
      title: "Assignment 4",
      description: "A webapp that demonstrates LSA using a search engine.",
      header: <Skeleton />,
      github: "https://github.com/T0raT/tigerliu-assignment-4",
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
        className={`font-futura bg-gruv-bg0-h z-50 overflow-clip relative h-full flex flex-col justify-center`}
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
