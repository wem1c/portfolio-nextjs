import ProjectCard from "@components/projects/ProjectCard";

const ProjectGrid = ({ projects, priority }) => {
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3  justify-center max-w-7xl mx-auto'>
      {projects.map((project, _idx) => {
        return (
          <ProjectCard
            key={_idx}
            link={project.link}
            image={project.image}
            title={project.title}
            priority={priority}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
