import ProjectCard from "../_components/ProjectCard";

export default function ProjectDetails() {
  const allProjects = [
    {
      imgUrl: "/images/spotify-tracker.png",
      title: "Spotify Tracker",
      desc: "The most innovative project to date(trust me)! A simple spotify statistic tracker with a bonus album cover generator.",
    },
    {
      imgUrl: "/images/this-website.png",
      title: "This website!",
      desc: "No UI libraries (for now), all components made by myself. Built with TypeScript, Next.js, Tailwind CSS. (ThreeJs is next!)",
    },
    {
      imgUrl: "/images/h2h.png",
      title: "H2H Market",
      desc: "An interactive 2-sided digital market game. UI/UX developed by me and my colleague at Platform Governance Research Lab.",
    },
  ];
  return (
    <main
      className="h-dvh pt-36 pb-20
       mx-auto overflow-y-auto no-scrollbar"
    >
      <section className="columns-1 tablet:columns-2 desktop:columns-3 gap-14 max-w-280 mx-auto">
        {allProjects.map((project, index) => (
          <div key={index} className="mb-14 break-inside-avoid">
            <ProjectCard
              imgUrl={project.imgUrl}
              title={project.title}
              desc={project.desc}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
