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
      <div
        className="h-[90%] relative top-36 grid grid-cols-1 
        tb:grid-cols-2 dsk:grid-cols-3 items-start 
        w-[70rem] w-min[20rem] mx-auto gap-10"
      >
        <ProjectCard />
      </div>
    </>
  );
}

export default ProjectsDetails;
