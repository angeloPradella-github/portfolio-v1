const ProjectCard = ({
  id,
  title,
  description,
  importance,
  category,
  tech,
  imgPath,
  repoLink,
  demoLink,
}) => {
  return (
    <article className="project-card w-full lg:w-[48%]">
      <img className="project-img" src={imgPath} alt="" />
      <div className="hidden-content flex justify-center flex-col px-5">
        <h3 className="clr-light-fix drop-shadow-md">{title}</h3>
        <div className="flex flex-wrap gap-3 content-container">
          {tech.map((techItem, i) => (
            <span key={techItem + i} className="clr-light-fix pill">
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
