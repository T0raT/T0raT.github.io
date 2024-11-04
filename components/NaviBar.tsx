import Link from "next/link";
import "../components/css/glassmorphism.css";

type NaviBarProps = {
  hoveredItem: string | null;
  setHoveredItem: (value: string | null) => void;
  navHover: boolean;
  setNavHover: (value: boolean) => void;
};

export const NaviBar = ({
  hoveredItem,
  setHoveredItem,
  navHover,
  setNavHover,
}: NaviBarProps) => {
  return (
    <nav
      onMouseEnter={() => setNavHover(true)}
      onMouseLeave={() => setNavHover(false)}
      className="glass2 futura rounded-[0.5rem] absolute z-[60] bg-[#3c3836] top-10 left-5 flex justify-center py-4 tracking-in-expand-slow"
    >
      {/* Z index is 60 because <main> z index is 50 */}
      <Link href="/" prefetch={true}>
        <p
          className="text-gruv-fg0 text-xl mx-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem("About Me")}
        >
          About Me
        </p>
      </Link>
      <Link href="/projects" passHref>
        <p
          className="text-gruv-fg0 text-xl mx-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem("Projects")}
        >
          Projects
        </p>
      </Link>
      <Link href="/assignments" prefetch={true}>
        <p
          className="text-gruv-fg0 text-xl mx-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem("Assignments")}
        >
          Assignments
        </p>
      </Link>
      <Link href="/contact" passHref>
        <p
          className="text-gruv-fg0 text-xl mx-3 cursor-pointer"
          onMouseEnter={() => setHoveredItem("Contact Me")}
        >
          Contact Me
        </p>
      </Link>
    </nav>
  );
};
