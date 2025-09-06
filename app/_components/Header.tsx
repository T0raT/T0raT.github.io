"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize(); // Runs once for initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className=" grid fixed top-0 w-full justify-center
          font-bold text-xl  text-center tracking-[0.16em] text-black
          bg-white cursor-pointer z-20

           header:cursor-default header:text-2xl header:text-white header:bg-transparent
        "
        onClick={() => {
          if (isMobile) setIsModalOpen(true);
        }}
      >
        <h2 className="p-3">TIGER&apos;S VIRTUAL PORTFOLIO WEBSITE</h2>
      </div>

      {isModalOpen && (
        <nav
          className="fixed inset-0 bg-black/90 text-white 
          flex flex-col items-center justify-center 
          font-(family-name:--font-vcr) z-20 "
          onClick={() => setIsModalOpen(false)}
        >
          <button className="absolute top-6 right-6 text-3xl">✕</button>
          <ul className="space-y-8 text-2xl text-center">
            {items.map((item, index) => {
              const isActive = pathName === item.href;

              return (
                <Link href={item.href} key={index} className="block">
                  {/* Wrapper div around small triangle and h3 page title */}
                  <div
                    className={`link-container flex ${
                      isActive ? "justify-between" : "justify-end"
                    }`}
                  >
                    <div className={isActive ? "ml-3" : "hidden"}>►</div>
                    <h3
                      className={`text-xl w-[130px] ${
                        isActive ? "bg-white text-black" : "text-white"
                      } px-2 tracking-[0.15em]`}
                    >
                      {item.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
