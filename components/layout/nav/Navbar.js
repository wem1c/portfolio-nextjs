// Module imports
import Link from "next/link";

// Component imports
import NavLink from "./NavLink";

// Data
const pages = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  return (
    <div className='max-w-7xl mx-auto p-5 flex flex-col md:flex-row justify-between items-center'>
      <Link href='/' className='flex flex-col text-center md:text-left'>
        <h1 className='font-semibold text-green-800 text-2xl'>
          Conor C. Peterson
        </h1>
        <p className='text-base font-light text-gray-600'>
          Full-Stack Engineer
        </p>
      </Link>
      <nav className='hidden md:flex space-x-5'>
        {pages.map((page, idx) => (
          <NavLink key={idx} name={page.name} path={page.path} />
        ))}
      </nav>

      <nav className='flex md:hidden mt-4 justify-center space-x-5'>
        {pages.map((page, idx) => (
          <NavLink key={idx} name={page.name} path={page.path} />
        ))}
      </nav>
    </div>
  );
}
