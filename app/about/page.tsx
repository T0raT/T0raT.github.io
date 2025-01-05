import { RotateWords } from "../components/RotateWords";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-[500px] absolute top-50 left-50">
      {/* First Paragraph Section */}
      <p className="mb-2">I AM</p>
      <RotateWords
        text=""
        words={[
          "A FRONTEND DEVELOPER.",
          "A COMPUTER SCIENCE STUDENT.",
          "A ???",
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
      <p className="mb-2">
        WHEN I&apos;M NOT BEIN DESTROYED BY MY COURSE WORK, I&apos;M
      </p>
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
      <Link href="/contact">Contact</Link>
    </div>
  );
}
