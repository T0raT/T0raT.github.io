import { RotateWords } from "../_components/RotateWords";

export default function About() {
  return (
    <main className="min-h-full mx-auto my-auto text-left">
      {/* First Paragraph Section */}
      <p className="mb-2">I AM</p>
      <RotateWords
        text=""
        words={["A FRONTEND DEVELOPER", "A GRAPHIC DESIGNER", "A GAMER"]}
      />

      {/* Second paragraph Section */}
      <br />
      <p className="mb-2">CURRENTLY, I&apos;M STUDYING THESE TOPICS:</p>
      <RotateWords
        text=""
        words={["EMBEDDED SYSTEMS", "FULLSTACK DEV", "COMPUTER GRAPHICS"]}
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
