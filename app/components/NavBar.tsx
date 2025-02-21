"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

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
    // Honestly, this eslint rule is annoying as fuck, I get it but damn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed w-[160px] left-0 top-0 h-full z-10 flex flex-col justify-center font-[family-name:var(--font-vcr)]">
      <ul>
        {items.map((item, index) => (
          // Holy shit I think I way over complicated this
          // I don't think I have to do this but im stubborn LOL
          // But tbh this is a very ugly way of going about this nav bar
          <li key={index}>
            <Link href={item}>
              {/* If list item is the current page, highlights background and renders the little triangle */}
              {currPage === index ? (
                <div className="link-container flex justify-between">
                  <div className="ml-3">►</div>
                  <h3 className="text-xl w-[130px] bg-white text-black px-2 tracking-[0.15em]">
                    {item.toLocaleUpperCase()}
                  </h3>
                </div>
              ) : (
                <div className="link-container flex justify-end">
                  <h3 className="text-xl w-[130px] px-2 tracking-[0.15em]">
                    {item.toLocaleUpperCase()}
                  </h3>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
