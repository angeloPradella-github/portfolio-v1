import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  title,
  description,
  tech,
  imgPath,
  repoLink,
  demoLink,
}) => {
  const tiltRef = useRef(null);
  const options = {
    max: 0,
    glare: true,
    "max-glare": 0.12,
    "glare-prerender": false,
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      VanillaTilt.init(tiltRef.current, options);
    }
  }, [options]);

  return (
    <motion.div
      layout
      ref={tiltRef}
      className="project-card w-full lg:w-[48%] drop-shadow-lg"
    >
      {/* external links */}
      <div
        className={`project-link-container ${
          !demoLink && !repoLink ? "hidden" : ""
        }`}
      >
        <article className="macOS-buttons">
          <span></span>
          <span></span>
          <span></span>
        </article>

        <article className="flex items-center gap-3">
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
        </article>
      </div>

      {/* backgound */}
      <img className="project-img" src={imgPath} alt="" />

      {/* hidden content */}
      <div className="hidden-content flex justify-center flex-col px-5 py-3">
        <h3 className="clr-light-fix text-2xl lg:text-4xl drop-shadow-md">
          {title}
        </h3>
        <p className="clr-light-fix text-base lg:text-xl ">{description}</p>
        <div className="flex flex-wrap gap-3 tech-container">
          {tech.map((techItem, i) => (
            <span
              key={techItem + i}
              className="clr-light-fix pill text-xs lg:text-base"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
