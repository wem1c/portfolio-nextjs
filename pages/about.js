// Module imports
import Head from "next/head";

// Component imports
import EmailMe from "@components/EmailMe";
import AboutMe from "../components/AboutMe";
import CurrentTechStack from "@components/tech-stacks/CurrentTechStack";
import FutureTechStack from "@components/tech-stacks/FutureTechStack";

// Data imports
import avatar2 from "@public/images/pfp_circle.png";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Conor C. Peterson</title>
      </Head>
      <section className='max-w-7xl mx-auto'>
        <EmailMe image={avatar2} />
        <AboutMe />
      </section>
      <section className=' bg-green-800'>
        <div className='max-w-7xl mx-auto flex justify-around flex-col lg:flex-row'>
          <CurrentTechStack />
          <FutureTechStack />
        </div>
      </section>
    </>
  );
}
