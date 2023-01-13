// Module imports
import Link from "next/link";

const socialMediaLink = ({ url, iconName, path }) => {
  return (
    <li className="mr-2">
      <Link
        href={url}
        className="text-base font-normal text-gray-600 dark:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi ${iconName} h-5 w-5`}
          viewBox="0 0 16 16"
        >
          <path d={path} />
        </svg>
      </Link>
    </li>
  );
};

export default socialMediaLink;
