import Image from "next/image";

/**
 * A project card component that displays the project image and description.
 * Styled to mimick ZZZ's interknot board.
 */

interface ProjectCardProps {
  imgUrl?: string;
  title?: string;
  desc?: string;
}

function ProjectCard({ imgUrl, title, desc }: ProjectCardProps) {
  return (
    <div
      className="kanban-card border-[3px] border-black hover:animate-borderPulse
                rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-[18rem] 
                flex flex-col overflow-hidden cursor-default z-0          
      "
    >
      <div className="img-container relative z-0">
        <Image
          src={imgUrl || "/images/zenless_zone_zero.jpg"}
          alt="image here"
          width={160}
          height={0} // Height set dynamically with CSS
          style={{ height: "auto" }} // Keeps aspect ratio
          quality={100}
          className="rounded-tl-[1.35rem] rounded-tr-[1.35rem] object-cover w-full"
        />
      </div>
      <div className="description-container py-2 px-4 bg-[#222222]">
        <h2 className="project-title text-2xl">{title}</h2>
        <hr className="divider border-2 border-gray-50/20 rounded-3xl my-2" />
        <p className="project-description text-base">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
