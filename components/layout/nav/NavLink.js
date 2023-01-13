// Module imports
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ name, path }) => {
  const router = useRouter();
  return (
    <li className="lg:transition-transform lg:duration-300 lg:hover:scale-110">
      <Link
        href={path}
        className={`text-base ${
          router.asPath === path
            ? "text-gray-800 font-bold"
            : "text-gray-600 font-normal "
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
