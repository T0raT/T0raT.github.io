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
  return (
    <main
      className="min-h-screen pt-36 px-4 
      animate-smoothTrans mx-auto overflow-y-auto no-scrollbar"
    >
      <section
        className="grid grid-cols-1 tb:grid-cols-2 dsk:grid-cols-3 gap-10 
                   w-full max-w-[70rem] mx-auto z-10"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* Add more cards as needed */}
      </section>
    </main>
  );
}

export default ProjectsDetails;
