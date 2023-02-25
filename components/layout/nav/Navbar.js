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
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ icons }) {
  return (
    <div className='max-w-7xl mx-auto p-5'>
      <div className='flex md:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='font-bold text-green-800 text-2xl'>
              Conor C. Peterson
            </h1>
            <p className='text-base font-light text-gray-500'>
              Fullstack Developer
            </p>
          </Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex space-x-5'>
            {pages.map((page, idx) => (
              <NavLink key={idx} name={page.name} path={page.path} />
            ))}
          </ul>
        </div>
        {/** Social Media links */}
        <ul className='flex space-x-6 items-center'>
          {icons.map((icon, idx) => {
            return (
              <li key={idx}>
                <Link href={icon.href}>
                  <FontAwesomeIcon icon={icon.icon} size='xl' />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='block md:hidden mt-4'>
        <ul className='flex justify-center space-x-5'>
          {pages.map((page, idx) => (
            <NavLink key={idx} name={page.name} path={page.path} />
          ))}
        </ul>
      </div>
    </div>
  );
}
