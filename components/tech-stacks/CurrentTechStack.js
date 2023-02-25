// Module imports
import {
  Sihtml5,
  SicssThree,
  Sijavascript,
  Sireact,
  Sinextdotjs,
  Sitailwindcss,
  Sivercel,
  Sigit,
  Silinux,
  Siarchlinux,
  Sidocker,
  Sipython,
  Sic,
  Sistrapi,
} from "@icons-pack/react-simple-icons";

const CurrentTechStack = () => {
  return (
    <section className='p-5'>
      <h1 className='p-5 text-tan w-fit text-center text-4xl font-bold mx-auto'>
        Tech I use:
      </h1>

      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-5 items-center place-items-center md:grid-cols-5'>
        <Sihtml5 color='default' size={80} title='HTML5' />
        <SicssThree color='default' size={80} title='CSS3' />
        <Sijavascript color='default' size={80} title='JavaScript' />
        <Sireact color='default' size={80} title='React' />
        <Sinextdotjs color='default' size={80} title='Next.js' />
        <Sitailwindcss color='default' size={80} title='TailwindCSS' />
        <Sistrapi color='default' size={80} title='Strapi CMS' />
        <Sivercel color='default' size={80} title='Vercel' />
        <Sigit color='default' size={80} title='Git' />
        <Silinux color='default' size={80} title='Linux' />
        <Siarchlinux color='default' size={80} title='Arch Linux' />
        <Sipython color='default' size={80} title='Python' />
        <Sic color='default' size={80} title='C' />
        <Sidocker color='default' size={80} title='Docker' />
      </div>
    </section>
  );
};

export default CurrentTechStack;
