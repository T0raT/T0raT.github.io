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
          words={["A FRONTEND DEVELOPER.", "A COMPUTER SCIENTIST.", "A ???"]}
        />
        <br />

        <p>CURRENTLY, IM STUDYING THE THESE TOPICS </p>
      </div>
    </div>
  );
}
