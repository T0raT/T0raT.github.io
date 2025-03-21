import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

function ProjectsDetails() {
  /* The plan for this is to create something
   * similar to ZZZ's interknot board, practically a kanban board.
   *
   * The card component should include
   * 1. Image slideshow? Or just project image
   *  - Constant width, dynamic height
   * 2. Prject Description.
   *  - Constant width (so image should be width: 100%), dynmaic height
   * */
  return (
    <>
      <NavBar />
      <div
        className="h-[90%] fixed top-36 grid grid-cols-1 
        md:grid-cols-2 dk:grid-cols-3 items-start max-w-5xl mx-auto gap-10"
      >
        <ProjectCard />
      </div>
    </>
  );
}

export default ProjectsDetails;
