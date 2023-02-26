import Link from "next/link";
import Image from "next/image";

const Project = ({ link, image, title, priority }) => {
  return (
    <Link href={link}>
      <div className='relative overflow-hidden border-2 border-tan shadow-lg max-w-xl'>
        {priority === "true" ? (
          <Image
            src={image}
            alt='project image'
            className='transition-transform ease-in-out duration-700 hover:scale-150'
            sizes='100vw, 100vw, 50vw, 33vw, 33vw'
            priority
          />
        ) : (
          <Image
            src={image}
            alt='project image'
            className='transition-transform ease-in-out duration-700 hover:scale-150'
          />
        )}

        <h1 className='absolute top-2 left-2 right-5 text-tan font-bold text-lg md:text-xl bg-green-800 rounded-md px-2 w-fit'>
          {title}
        </h1>
      </div>
    </Link>
  );
};
export default Project;
