// Module imports
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

// Component imports
import RainbowHighlight from "./RainbowHighlight";

// Data imports
import homeRunSVG from "@public/images/home_run.svg";

export default function Hero() {
  const highlightedWords = [
    { text: "Engineer", color: "#B34B15" },
    { text: "Developer", color: "#C93665" },
    { text: "Programmer", color: "#229C95" },
    { text: "Researcher", color: "#B3399D" },
  ];
  return (
    <section>
      <div className='max-w-7xl mx-auto flex flex-col items-center overflow-hidden md:flex-row'>
        <div className='w-full lg:w-1/2 mx-auto px-5 text-center'>
          <RoughNotationGroup show={true}>
            {highlightedWords.map((word, _idx) => {
              return (
                <RainbowHighlight key={_idx} color={word.color}>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-tan my-2'>
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
          sizes='(min-width: 1280px) 50vw, 100vw'
          alt='a baseball player batting a baseball'
          className='w-4/5 md:w-1/2 lg:w-2/5'
        />
      </div>
    </section>
  );
}
