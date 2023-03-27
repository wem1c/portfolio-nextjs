import Link from "next/link";
import Image from "next/image";

const Project = ({ link, image, title, priority }) => {
  return (
    <Link href={link}>
      <div className='relative overflow-hidden border-2 border-tan shadow-lg max-w-xl aspect-video'>
        {priority === "true" ? (
          <Image
            src={image}
            alt='project image'
            className='transition-transform ease-in-out duration-700 hover:scale-150'
            sizes='(min-width: 1280px) 33vw,(min-width: 1024px) 50wv, 100vw'
            priority
          />
        ) : (
          <Image
            src={image}
            alt='project image'
            className='transition-transform ease-in-out duration-700 hover:scale-150'
            sizes='(min-width: 1280px) 33vw,(min-width: 1024px) 50wv, 100vw'
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
