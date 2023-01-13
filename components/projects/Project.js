import Link from "next/link";
import Image from "next/image";

const Project = ({ link, image, title }) => {
  return (
    <Link href={link}>
      <div className="relative overflow-hidden shadow-lg">
        <Image
          src={image}
          alt="project image"
          className="transition-transform ease-in-out duration-700 hover:scale-150"
        />
        <h1 className="absolute top-10 left-5 right-5 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2 w-fit">
          {title}
        </h1>
      </div>
    </Link>
  );
};
export default Project;
