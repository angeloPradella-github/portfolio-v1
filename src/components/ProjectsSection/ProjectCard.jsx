import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function ProjectCard({
  id,
  title,
  description,
  tech,
  imgPath,
  repoLink,
  demoLink,
}) {
  const tiltRef = useRef(null);
  const options = {
    max: 0,
    glare: true,
    "max-glare": 0.2,
    "glare-prerender": false,
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  return (
    <article
      ref={tiltRef}
      className="project-card w-full lg:w-[48%] drop-shadow-lg"
    >
      {/* external links */}
      <div
        className={`project-link-container ${
          !demoLink && !repoLink ? "hidden" : ""
        }`}
      >
        {demoLink ? (
          <a className="project-link" href="">
            <i className="fa-solid fa-up-right-from-square up-transition"></i>
          </a>
        ) : (
          ""
        )}
        {repoLink ? (
          <a className="project-link" href="">
            <i className="fa-brands fa-github up-transition"></i>
          </a>
        ) : (
          ""
        )}
      </div>
      {/* backgound */}
      <img className="project-img" src={imgPath} alt="" />
      {/* hidden content */}
      <div className="hidden-content flex justify-center flex-col px-5 py-3">
        <h3 className="clr-light-fix drop-shadow-md">{title}</h3>
        <p className="clr-light-fix">{description}</p>
        <div className="flex flex-wrap gap-3 tech-container">
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
