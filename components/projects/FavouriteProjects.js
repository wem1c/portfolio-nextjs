// Module imports
import Link from "next/link";

// Component imports
import Project from "./Project";

// Image imports
import pokemonImage from "../public/projects/pokemon_1600x900.png";
import googleImage from "../public/projects/google_1600x900.png";

const favoriteProjects = [
  {
    link: "https://pokemon-type-chart.vercel.app/",
    image: pokemonImage,
    title: "Interactive Pokemon Chart",
  },
  {
    link: "https://google.com/",
    image: googleImage,
    title: "Placeholder Text",
  },
];

export default function FavouriteProjects() {
  return (
    <section className="bg-[#F1F1F1] my-10 space-y-5 pb-10">
      <header className="flex flex-col items-center py-5 space-y-5">
        <h1 className="text-6xl font-bold text-gray-500 text-center">
          Favorite Projects
        </h1>
        <Link
          href="/projects"
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
          <p>View all</p>
        </Link>
      </header>

      {/* Grid starts here */}
      <div className="grid gap-5 md:grid-cols-2">
        {favoriteProjects.length > 0 ? (
          favoriteProjects.map((project, _idx) => {
            return (
              <Project
                key={_idx}
                link={project.link}
                image={project.image}
                title={project.title}
              />
            );
          })
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}
