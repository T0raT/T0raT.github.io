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
   *  - Constant width (so image should be width: 100%), dynmaic height
   * */
  return (
    <>
      <NavBar />
      <div className="top-80">
        <div
          className="kanban-card border-[3px] border-black hover:animate-borderPulse
          rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-80 flex flex-col overflow-hidden"
        >
          <div className="img-container relative">
            <Image
              src="/images/zenless_zone_zero.jpg"
              alt="image here"
              width={300}
              height={0} // Height set dynamically with CSS
              style={{ height: "auto" }} // Keeps aspect ratio
              className="rounded-tl-[1.35rem] rounded-tr-[1.35rem] object-cover w-full"
            />
          </div>
          <div className="description-container py-2 px-4 bg-[#222222] ">
            <h2 className="project-title text-2xl">Example Project</h2>
            <hr className="divider border-2 border-gray-50/20 rounded-3xl my-2 " />
            <p className="project-description">
              I used *insert 5 billion stacks* to build to *insert LLM wrapper*
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetails;
