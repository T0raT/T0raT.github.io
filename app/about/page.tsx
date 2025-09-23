import { RotateWords } from "@/components/RotateWords";

export default function About() {
  return (
    <main className="min-h-full w-[500px] mx-auto my-auto px-10 text-left">
      {/* First Paragraph Section */}
      <p className="mb-2">I AM</p>
      <RotateWords
        text=""
        words={["A FRONTEND DEVELOPER"]}
      />

      {/* Second paragraph Section */}
      <br />
      <p className="mb-2">CURRENTLY, I&apos;M STUDYING THESE TOPICS:</p>
      <RotateWords
        text=""
        words={["GRAPHIC DESIGN", "FULLSTACK DEV", "COMPUTER GRAPHICS"]}
      />

      {/* Third paragraph Section */}
      <br />
      <p className="mb-2">WHEN I&apos;M NOT GRINDING, I&apos;M:</p>
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
    </main>
  );
}
