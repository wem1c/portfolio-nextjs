// Module imports
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({ icons }) {
  return (
    <div className='p-5 mt-5 flex flex-col space-y-5 justify-between items-center'>
      {/** Copyright notice */}
      <p className='text-lg'>Made with ❤️ by Conor C. Peterson</p>
      {/** Social-media links */}
      <ul className='space-x-5 flex flex-row items-center'>
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
  );
}
