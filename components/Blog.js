import Image from "next/image";

import underConstructionSVG from "@public/images/under_construction.svg";

export default function Blog() {
  return (
    <section className='space-y-10 p-5'>
      <Image
        src={underConstructionSVG}
        quality={100}
        className='mx-auto lg:w-1/2'
      />
      <p className='text-green-800 font-semibold text-center text-3xl'>
        Coming soon!
      </p>
    </section>
  );
}
