// Module imports
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

// Component imports
import RainbowHighlight from "./RainbowHighlight";

// Data imports
import homeRunSVG from "@public/images/home_run.svg";

export default function Hero() {
  const highlightedWords = [
    { text: "Developer", color: "#FFAD54" },
    { text: "Programmer", color: "#3BCBFF" },
    { text: "Engineer", color: "#B8FF6E" },
    { text: "Researcher", color: "#E847FF" },
  ];
  return (
    <section className='p-5'>
      {/* Rough text container */}
      <div className='max-w-7xl mx-auto flex flex-col items-center overflow-hidden md:flex-row'>
        <div className='w-full mx-auto px-5 text-center'>
          <RoughNotationGroup show={true}>
            {highlightedWords.map((word, _idx) => {
              return (
                <RainbowHighlight key={_idx} color={word.color}>
                  <h1 className='text-4xl md:text-5xl font-bold text-green-800 my-2'>
                    {word.text}
                  </h1>
                </RainbowHighlight>
              );
            })}
          </RoughNotationGroup>
        </div>
        <Image
          priority
          src={homeRunSVG}
          quality={100}
          alt='image of a man batting a baseball'
          className='flex w-2/3 md:w-1/2 lg:w-1/3'
        />
      </div>
    </section>
  );
}
