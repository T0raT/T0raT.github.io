import Image from "next/image";
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
    <>
      <NavBar />
      <div className="top-80">
        <div className="kanban-card border border-red-500 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-72 flex flex-col">
          <div className="relative w-full">
            <Image
              src="/images/zenless_zone_zero.jpg"
              alt="image here"
              width={288}
              height={384}
              className="rounded-tl-3xl rounded-tr-3xl object-left-bottom"
            />
          </div>
          <div className="desc-section">desc goes here</div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetails;
