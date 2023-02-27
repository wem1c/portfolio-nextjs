// Module imports
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({ icons }) {
  return (
    <div className='p-5 mt-5 flex flex-col space-y-5 justify-between items-center'>
      <p className='text-lg'>Made with ❤️ by Conor C. Peterson</p>
      <div className='space-x-5 flex flex-row items-center'>
        {icons.map((icon, idx) => {
          return (
            <Link key={idx} href={icon.href}>
              <FontAwesomeIcon icon={icon.icon} size='xl' />
              <span className='sr-only'>{icon.alt}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
