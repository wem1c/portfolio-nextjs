import Image from "next/image";
import Button from "@components/Button";

const EmailMe = ({ image }) => {
  return (
    <div className='p-5 space-y-5 float-left w-full md:w-1/2 lg:w-2/5'>
      <Image
        src={image}
        alt='headshot'
        className='w-full mx-auto'
        sizes='(min-width: 768px) 45vw, 100vw'
        priority
      />
      <Button url='mailto:conorpetersondev@gmail.com' text='E-mail me!' />
    </div>
  );
};

export default EmailMe;
