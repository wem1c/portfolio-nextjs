import Image from "next/image";
import Button from "@components/Button";

const EmailMe = ({ image }) => {
  return (
    <div className='p-5 flex flex-col space-y-5'>
      <Image src={image} alt='headshot' className='w-full max-w-md mx-auto' />
      <Button url='mailto:conorpetersondev@gmail.com' text='E-mail me!' />
    </div>
  );
};

export default EmailMe;
