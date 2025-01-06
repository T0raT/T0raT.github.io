"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { cn } from "@/util/cn";

const NavBar = () => {
  const items = ["about", "projects", "contact"];
  const [currPage, setCurrPage] = useState(0);

  /**
   * Using url to check current page,
   * so I can highlight the current page on nav bar
   */
  useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const urlLength = urlArr.length - 1;
    const urlStr = urlArr[urlLength];
    console.log(currPage);
    for (let i = 0; i < items.length; i++) {
      if (items[i] === urlStr) {
        setCurrPage(i);
        break;
      }
    }
  }, []);

  return (
    <nav className="fixed border-red-600 border-2 w-[170px] left-0 top-0 h-full z-10">
      <ul className="flex flex-col">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className={cn("", { "text-red-600": currPage === index })}
              href={item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
