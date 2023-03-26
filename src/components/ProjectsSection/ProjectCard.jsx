// ProjectCard.jsx
const ProjectCard = ({ id, title, category }) => {
  return (
    <article className="project-card m-4 p-4 border border-gray-300">
      <h3>{title}</h3>
      <p>{category}</p>
    </article>
  );
};

export default ProjectCard;
