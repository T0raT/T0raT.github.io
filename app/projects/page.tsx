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
    <div
      className="h-[90%] relative top-36 
      flex flex-wrap flex-row justify-center items-start animate-smoothTrans 
      dsk:w-[70rem] tb:w-[50rem] w-[17rem] mx-auto gap-10 overflow-auto
      no-scrollbar"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectsDetails;
