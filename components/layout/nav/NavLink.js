// Module imports
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ name, path }) => {
  const router = useRouter();
  return (
    <li className='lg:transition-transform lg:duration-50 lg:hover:scale-125 lg:hover:underline'>
      <Link
        href={path}
        className={`text-base ${
          router.asPath === path
            ? "text-gray-900 font-semibold font-"
            : "text-gray-700 font-normal "
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
