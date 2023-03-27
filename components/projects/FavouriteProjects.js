// Component imports
import Button from "@components/Button";
import ItemGrid from "@components/ItemGrid";
import ProjectCard from "@components/projects/ProjectCard";

// Image imports
import portfolioImage from "@public/images/projects/portofolio_1600x900.png";
import pokemonImage from "@public/images/projects/pokemon_1600x900.png";
import yourProjectImage from "@public/images/projects/your_project.png";

const favoriteProjects = [
  {
    link: "https://pokemon-type-chart.vercel.app/",
    image: pokemonImage,
    title: "Responsive Pokemon Chart",
  },
  {
    link: "https://conorpeterson.com/",
    image: portfolioImage,
    title: "This website!",
  },
  {
    link: "",
    image: yourProjectImage,
    title: "Your project here!",
  },
];

export default function FavouriteProjects() {
  return (
    <section className='bg-green-800 space-y-10 p-5'>
      <header className='flex flex-col items-center space-y-5'>
        <h1 className='text-3xl md:text-4xl text-tan font-bold text-center'>
          Favorite Projects
        </h1>
        <Button url={"/projects"} text={"View All"} inverse='true' />
      </header>

      <ItemGrid>
        {favoriteProjects.length > 0 ? (
          favoriteProjects.map((project, _idx) => {
            return (
              <ProjectCard
                key={_idx}
                link={project.link}
                image={project.image}
                title={project.title}
              />
            );
          })
        ) : (
          <p>No projects.</p>
        )}
      </ItemGrid>
    </section>
  );
}
