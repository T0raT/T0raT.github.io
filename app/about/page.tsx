import Header from "../components/Header";
import { RotateWords } from "../components/RotateWords";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-vcr)] w-full">
      <Header />
      <div className="w-[500px] absolute top-50 left-50">
        <p className="mb-2">I AM</p>
        <RotateWords
          text=""
          words={[
            "A FRONTEND DEVELOPER.",
            "A COMPUTER SCIENCE STUDENT",
            "A ???",
          ]}
        />
        <br />

        <p className="mb-2">
          CURRENTLY, I&apos;M STUDYING THESE TOPICS AT BOSTON UNIVERSITY:
        </p>
        <RotateWords
          text=""
          words={["EMBEDDED SYSTEMS", "FULLSTACK DEV", "COMPUTER GRAPHICS"]}
        />
        <br />

        <p className="mb-2">
          WHEN I&apos;M NOT BEIN DESTROYED BY MY COURSE WORK, I&apos;M
        </p>
        <RotateWords
          text=""
          words={[
            "PLAYING GUITAR",
            "GOING TO THE GYM",
            "READING LIGHT NOVELS",
            "DRAWING",
            "ENJOYING MUSIC",
            "ICE SKATING",
            "TAKING PICTURES OF RANDOM STUFF",
            "GAMING",
          ]}
        />
      </div>
    </div>
  );
}
