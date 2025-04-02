"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get the current path
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // On page render, check screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <div
        className="
          cursor-pointer hdr:cursor-default grid fixed top-0 w-full justify-center font-bold 
          text-xl hdr:text-2xl text-center tracking-[0.16em] z-50
          bg-white hdr:bg-transparent text-black hdr:text-white
        "
        onClick={() => {
          if (isMobile) setIsModalOpen(true);
        }}
      >
        <h2 className="p-3">TIGER&apos;S VIRTUAL PORTFOLIO WEBSITE</h2>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 text-white flex flex-col items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <button className="absolute top-6 right-6 text-3xl">✕</button>
          <ul className="space-y-8 text-2xl text-center">
            {items.map((item) => (
              <li key={item.href} onClick={() => setIsModalOpen(false)}>
                <Link href={item.href} key={item.href}>
                  {/* Just checks if current pathname matches the href in items.
                  If it matches, highlight the current page.
              */}
                  {pathname === item.href ? (
                    <div className="link-container flex justify-between">
                      <div className="mr-2">►</div>
                      <h3
                        className="text-xl w-[130px] bg-white 
                        text-black px-2 tracking-[0.13em]"
                      >
                        {item.name}
                      </h3>
                    </div>
                  ) : (
                    <div className="link-container flex justify-end">
                      <h3 className="text-xl w-[130px] px-2 tracking-[0.13em]">
                        {item.name}
                      </h3>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
