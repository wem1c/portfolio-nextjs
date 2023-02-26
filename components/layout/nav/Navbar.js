// Module imports
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component imports
import NavLink from "./NavLink";

// Data
const pages = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar({ icons }) {
  return (
    <div className='max-w-7xl mx-auto p-5'>
      <div className='flex md:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='font-semibold text-green-800 text-2xl'>
              Conor C. Peterson
            </h1>
            <p className='text-base font-light text-gray-600'>
              Fullstack Developer
            </p>
          </Link>
        </div>
        <nav className='hidden md:flex space-x-5'>
          {pages.map((page, idx) => (
            <NavLink key={idx} name={page.name} path={page.path} />
          ))}
        </nav>
        <div className='flex space-x-6 items-center'>
          {icons.map((icon) => {
            return (
              <Link href={icon.href}>
                <FontAwesomeIcon icon={icon.icon} size='xl' />
                <span className='sr-only'>{icon.alt}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <nav className='flex md:hidden mt-4 justify-center space-x-5'>
        {pages.map((page, idx) => (
          <NavLink key={idx} name={page.name} path={page.path} />
        ))}
      </nav>
    </div>
  );
}
