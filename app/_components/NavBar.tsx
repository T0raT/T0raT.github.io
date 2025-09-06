"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  /**
   * Using url to check current page,
   * so I can highlight the current page on nav bar.
   */

  const items = [
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  const pathName = usePathname();

  return (
    <nav
      className="hidden fixed left-0 top-0 h-full w-[160px]
      flex-col justify-center z-10
      font-(family-name:--font-vcr) 
      header:flex 
      "
    >
      <ul>
        {items.map((item, index) => {
          const isActive = pathName === item.href;

          return (
            <Link href={item.href} key={index}>
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
  );
};

export default NavBar;
