// Component imports
import Button from "@components/Button";
import Project from "./Project";

// Image imports
import pokemonImage from "@public/images/projects/pokemon_1600x900.png";

const favoriteProjects = [
  {
    link: "https://pokemon-type-chart.vercel.app/",
    image: pokemonImage,
    title: "Responsive Pokemon Type Chart",
  },
];

export default function FavouriteProjects() {
  return (
    <section className='bg-green-800 space-y-10 p-5'>
      <header className='flex flex-col items-center space-y-5'>
        <h1 className='text-4xl text-tan font-bold text-center'>
          Favorite Projects
        </h1>
        <Button url={"/projects"} text={"View All"} />
      </header>

      {/* Grid starts here */}
      <div className='grid justify-center max-w-7xl mx-auto'>
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
