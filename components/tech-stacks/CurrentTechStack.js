// Module imports
import {
  siHtml5,
  siCss3,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siVercel,
  siGit,
  siLinux,
  siArchlinux,
  siDocker,
  siPython,
  siC,
  siStrapi,
} from "simple-icons";
import IconGrid from "./IconGrid";

const icons = [
  siHtml5,
  siCss3,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siVercel,
  siGit,
  siLinux,
  siArchlinux,
  siDocker,
  siPython,
  siC,
  siStrapi,
];

const CurrentTechStack = () => {
  return (
    <section className='p-5'>
      <h1 className='p-5 text-tan w-fit text-center text-4xl font-bold mx-auto'>
        Tech I use:
      </h1>
      <IconGrid icons={icons} />
    </section>
  );
};

export default CurrentTechStack;
