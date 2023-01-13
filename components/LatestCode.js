// Module imports
import Link from "next/link";

// Component imports
import Repository from "./Repository";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  return (
    <section className="bg-white my-10 space-y-5">
      <header className="flex flex-col items-center py-5 space-y-5">
        <h1 className="text-6xl font-bold text-gray-500 text-center">
          Latest Code
        </h1>
        <Link
          href={`https://github.com/${userData.githubUsername}`}
          className="px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right-square"
            stroke="4"
            strokeWidth="4"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
          <p>View GitHub</p>
        </Link>
      </header>

      <ul className="grid gap-10 max-w-7xl mx-auto px-10 md:grid-cols-2">
        {repositories.length > 0 ? (
          repositories.map((repository, _idx) => {
            return <Repository key={_idx} repo={repository} />;
          })
        ) : (
          <p>No repos.</p>
        )}
      </ul>
    </section>
  );
}
