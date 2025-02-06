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
      <div className="kanban-card"></div>
    </div>
  );
}

export default ProjectsDetails;
