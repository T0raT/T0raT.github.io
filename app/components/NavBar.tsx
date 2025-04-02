"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  /**
   * Using url to check current page,
   * so I can highlight the current page on nav bar.
   *
   * Did not need useEffect like I thought before.
   * Component is called on each page so it reloads anyways.
   */
  const pathname = usePathname(); // Get the current path

  const items = [
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];
  return (
    <nav
      className="invisible hdr:visible fixed w-[160px] left-0 top-0 h-full 
      z-10 flex flex-col justify-center font-[family-name:var(--font-vcr)]"
    >
      <ul>
        {items.map((item, index) => (
          // This is a little more refined than before.
          <li key={index}>
            <Link href={item.href} key={item.href}>
              {/* Just checks if current pathname matches the href in items.
                  If it matches, highlight the current page.
              */}
              {pathname === item.href ? (
                <div className="link-container flex justify-between">
                  <div className="ml-3">►</div>
                  <h3
                    className="text-xl w-[130px] bg-white 
                    text-black px-2 tracking-[0.15em]"
                  >
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
