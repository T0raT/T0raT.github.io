import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard.tsx"

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
      <ProjectCard />
    </>
  );
}

export default ProjectsDetails;
