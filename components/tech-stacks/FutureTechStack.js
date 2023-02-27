// Modules
import {
  siAmazonaws,
  siGooglecloud,
  siSvelte,
  siMongodb,
  siFirebase,
  siUpstash,
  siKubernetes,
  siStoryblok,
} from "simple-icons";

// Components
import IconGrid from "./IconGrid";

const icons = [
  siAmazonaws,
  siGooglecloud,
  siSvelte,
  siMongodb,
  siFirebase,
  siUpstash,
  siKubernetes,
  siStoryblok,
];

const FutureTechStack = () => {
  return (
    <section className='p-5'>
      <h1 className='p-5 text-tan w-fit text-center text-4xl font-bold mx-auto'>
        Tech I'm Exploring:
      </h1>
      <IconGrid icons={icons} />
    </section>
  );
};

export default FutureTechStack;
