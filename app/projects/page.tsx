import ProjectCard from "../components/ProjectCard";

/* The plan for this is to create something
 * similar to ZZZ's interknot board, practically a kanban board.
 *
 * The card component should include
 * 1. Image slideshow? Or just project image
 *  - Constant width, dynamic height
 * 2. Prject Description.
 *  - Constant width (so image should be width: 100%), dynmaic height
 * */

function ProjectsDetails() {
  const allProjects = [
    {
      imgUrl: "/images/spotify-tracker.png",
      title: "Spotify Tracker",
      desc: "The most innovative project to date(trust me)! A simple spotify statistic tracker with an bonus album cover generator.",
    },
    {
      imgUrl: "/images/this-website.png",
      title: "This website!",
      desc: "No UI libraries (for now), all components made by myself. Made with TypeScript, Next.js, Tailwind CSS. (ThreeJs is next!)",
    },
    {
      imgUrl: "/images/h2h.png",
      title: "H2H Market",
      desc: "An interactive 2-sided digital market game. UI/UX developed by me and my colleague.",
    },
  ];

  return (
    <main
      className="min-h-screen pt-36 pb-20 px-4 
      animate-smoothTrans mx-auto overflow-y-auto no-scrollbar"
    >
      <section className="columns-1 tb:columns-2 dsk:columns-3 gap-14 w-full max-w-[70rem] mx-auto">
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

export default ProjectsDetails;
