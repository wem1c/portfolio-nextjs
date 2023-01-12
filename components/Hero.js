// Module imports
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

// Component imports
import RainbowHighlight from "./RainbowHighlight";

// Data imports
import avatar from "../public/avatar.png";

export default function Hero() {
  const highlightedWords = [
    { text: "Developer", color: "#AD85FF" },
    { text: "Programmer", color: "#FFAD54" },
    { text: "Engineer", color: "#10B32A" },
  ];
  return (
    <section className="flex flex-col md:flex-row lg:flex-row overflow-hidden items-center">
      {/* Rough text container */}
      <div className="w-full mx-auto px-5 text-center">
        <RoughNotationGroup show={true}>
          {highlightedWords.map((word, _idx) => {
            return (
              <RainbowHighlight key={_idx} color={word.color}>
                <h1 className="text-4xl font-bold text-gray-700 my-2">
                  {word.text}
                </h1>
              </RainbowHighlight>
            );
          })}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <Image src={avatar} alt="avatar" className="flex w-1/2" />
    </section>
  );
}
