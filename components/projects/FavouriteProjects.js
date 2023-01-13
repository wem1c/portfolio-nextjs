// Module imports
import Link from "next/link";

// Component imports
import Button from "@components/Button";
import Project from "./Project";

// Image imports
import pokemonImage from "@public/projects/pokemon_1600x900.png";
import googleImage from "@public/projects/google_1600x900.png";

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
        <Button url={"/projects"} text={"View All"} />
      </header>

      {/* Grid starts here */}
      <div className="grid gap-5 md:grid-cols-2 max-w-7xl mx-auto">
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
