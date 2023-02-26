import ProjectGrid from "./projects/ProjectGrid";
import portfolioImage from "@public/images/projects/portofolio_1600x900.png";
import pokemonImage from "@public/images/projects/pokemon_1600x900.png";
import yourProjectImage from "@public/images/projects/your_project.png";

const projects = [
  {
    link: "https://conorpeterson.com/",
    image: portfolioImage,
    title: "This website!",
  },
  {
    link: "https://pokemon-type-chart.vercel.app/",
    image: pokemonImage,
    title: "Responsive Pokemon Chart",
  },
  {
    link: "",
    image: yourProjectImage,
    title: "Your project here!",
  },
];

export default function FavouriteProjects() {
  return (
    <section className='space-y-10 p-5'>
      <ProjectGrid projects={projects} priority='true' />
    </section>
  );
}
