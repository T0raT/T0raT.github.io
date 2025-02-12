import NavBar from "../components/NavBar";

function ProjectsDetails() {
  /* The plan for this is to create something
   * similar to ZZZ's interknot board, practically a kanban board.
   *
   * The card component should include
   * 1. Image slideshow? Or just project image
   *  - Constant width, dynamic height
   * 2. Prject Description.
   *  - Constant width, dynmaic height
   * */
  return (
    <div>
      <NavBar />
      Project section under development (´◡`)
      <div className="kanban-card border border-red-500 rounded-tl-lg rounded-tr-lg rounded-bl-lg w-40">
        skeleton
      </div>
    </div>
  );
}

export default ProjectsDetails;
