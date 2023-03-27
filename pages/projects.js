import Head from "next/head";

import ItemGrid from "@components/ItemGrid";
import ProjectCard from "@components/projects/ProjectCard";

import portfolioImage from "@public/images/projects/portofolio_1600x900.png";
import pokemonImage from "@public/images/projects/pokemon_1600x900.png";
import yourProjectImage from "@public/images/projects/your_project.png";

const allProjects = [
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

export default function projects() {
  return (
    <>
      <Head>
        <title>Projects - Conor C. Peterson</title>
      </Head>

      <section className='space-y-10 p-5'>
        <ItemGrid>
          {allProjects.length > 0 ? (
            allProjects.map((project, _idx) => {
              return (
                <ProjectCard
                  key={_idx}
                  link={project.link}
                  image={project.image}
                  title={project.title}
                  priority={"true"}
                />
              );
            })
          ) : (
            <p>No projects.</p>
          )}
        </ItemGrid>
      </section>
    </>
  );
}
