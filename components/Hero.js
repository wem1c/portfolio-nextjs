// Module imports
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

// Component imports
import RainbowHighlight from "./RainbowHighlight";

// Data imports
import avatar from "../public/avatar.png";

export default function Hero() {
  const highlightedWords = [
    { text: "Developer", color: "#FFAD54" },
    { text: "Programmer", color: "#AD85FF" },
    { text: "Engineer", color: "#10B32A" },
  ];
  return (
    <section className='bg-green-800 py-5'>
      {/* Rough text container */}
      <div className='max-w-7xl mx-auto flex flex-col items-center overflow-hidden md:flex-row'>
        <div className='w-full mx-auto px-5 text-center'>
          <RoughNotationGroup show={true}>
            {highlightedWords.map((word, _idx) => {
              return (
                <RainbowHighlight key={_idx} color={word.color}>
                  <h1 className='text-5xl font-bold text-green-800 my-2'>
                    {word.text}
                  </h1>
                </RainbowHighlight>
              );
            })}
          </RoughNotationGroup>
        </div>
        {/* Image container */}
        <Image src={avatar} alt='avatar' className='flex w-1/2' />
      </div>
    </section>
  );
}
