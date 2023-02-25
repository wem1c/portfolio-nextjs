// Module imports
import {
  Siamazonaws,
  Sigooglecloud,
  Sisvelte,
  Sireact,
  Simongodb,
  Sifirebase,
  Siupstash,
  Sikubernetes,
  Sistoryblok,
} from "@icons-pack/react-simple-icons";

const FutureTechStack = () => {
  return (
    <section className='p-5'>
      <h1 className='p-5 text-tan w-fit text-center text-4xl font-bold mx-auto'>
        Tech I'm Exploring:
      </h1>
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-5 items-center place-items-center md:grid-cols-5'>
        <Sisvelte color='default' size={80} title='SvelteKit' />
        <Sistoryblok color='default' size={80} title='Storyblok CMS' />
        <Siamazonaws color='default' size={80} title='AWS' />
        <Siupstash color='default' size={80} title='Upstash' />
        <Sifirebase color='default' size={80} title='Firebase' />
        <Simongodb color='default' size={80} title='MongoDB' />
        <Sireact color='default' size={80} title='React Native' />
        <Sigooglecloud color='default' size={80} title='Google Cloud' />
        <Sikubernetes color='default' size={80} title='Kubernetes' />
      </div>
    </section>
  );
};

export default FutureTechStack;
