import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function ProjectCard({
  id,
  title,
  description,
  importance,
  category,
  tech,
  imgPath,
  repoLink,
  demoLink,
}) {
  const tiltRef = useRef(null);
  const options = {
    max: 1, // Disabilita l'effetto di inclinazione
    glare: true,
    "max-glare": 0.2, // Opacità massima del glare (1 = 100%, 0.5 = 50%)
    "glare-prerender": false, // Se impostato a false, VanillaTilt crea gli elementi glare per te
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  return (
    <article ref={tiltRef} className="project-card w-full lg:w-[48%]">
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
}

export default ProjectCard;
