import { RotateWords } from "../components/RotateWords";

export default function About() {
  return (
    <>
      <div className="w-[450px]  mw-2 mx-auto my-auto text-left px-8">
        {/* First Paragraph Section */}
        <p className="mb-2">I AM</p>
        <RotateWords
          text=""
          words={[
            "A FRONTEND DEVELOPER",
            "A COMPUTER SCIENCE STUDENT",
            "A GAMER",
          ]}
        />

        {/* Second paragraph Section */}
        <br />
        <p className="mb-2">
          CURRENTLY, I&apos;M STUDYING THESE TOPICS AT BOSTON UNIVERSITY:
        </p>
        <RotateWords
          text=""
          words={["EMBEDDED SYSTEMS", "FULLSTACK DEV", "COMPUTER GRAPHICS"]}
        />

        {/* Third paragraph Section */}
        <br />
        <p className="mb-2">WHEN I&apos;M NOT GRINDING COURSE WORK I&apos;M:</p>
        <RotateWords
          text=""
          words={[
            "PLAYING GUITAR",
            "GYMMING",
            "READING LIGHT NOVELS",
            "DRAWING",
            "ENJOYING MUSIC",
            "ICE SKATING",
            "TAKING PICTURES OF RANDOM STUFF",
            "GAMING",
          ]}
        />
      </div>
    </>
  );
}
