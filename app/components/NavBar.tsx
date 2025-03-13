"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  /**
   * Using url to check current page,
   * so I can highlight the current page on nav bar
   */
  const pathname = usePathname(); // Get the current path

  const items = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed w-[160px] left-0 top-0 h-full z-10 flex flex-col justify-center font-[family-name:var(--font-vcr)]">
      <ul>
        {items.map((item, index) => (
          // Holy shit I think I way over complicated this
          // I don't think I have to do this but im stubborn LOL
          // But tbh this is a very ugly way of going about this nav bar
          <li key={index}>
            <Link href={item.href} key={item.href}>
              {/* If list item is the current page, highlights background and renders the little triangle */}
              {pathname === item.href ? (
                <div className="link-container flex justify-between">
                  <div className="ml-3">►</div>
                  <h3 className="text-xl w-[130px] bg-white text-black px-2 tracking-[0.15em]">
                    {item.name}
                  </h3>
                </div>
              ) : (
                <div className="link-container flex justify-end">
                  <h3 className="text-xl w-[130px] px-2 tracking-[0.15em]">
                    {item.name}
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
