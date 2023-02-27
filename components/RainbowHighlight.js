import { RoughNotation } from "react-rough-notation";

const RainbowHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type='highlight'
      iterations={1}
      animationDuration={animationDuration}
      color={color}
      animationDelay={1000}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;
