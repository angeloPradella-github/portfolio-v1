import { useState, useEffect, useCallback } from "react";
import { Menu } from "antd";
import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./projectsData";

const ProjectCard = lazy(() => import("./ProjectCard"));

const ProjectsSection = () => {
  const [currentMenu, setCurrentMenu] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState(4);

  const contentMap = {
    all: (
      <>
        In questa sezione sono presenti i miei migliori progetti{" "}
        <span className="clr-accent">accuratamente realizzati</span>, di
        complessità e impatto vari, evidenziando la familiarità con diverse
        tecnologie e linguaggi di programmazione.
      </>
    ),
    webapp: (
      <>
        La raccolta include applicazioni Web{" "}
        <span className="clr-accent">client-server</span>, sviluppate seguendo
        diversi pattern architetturali come l'
        <span className="clr-accent">MVC</span> o implementando soluzioni basate
        su <span className="clr-accent">API</span> e{" "}
        <span className="clr-accent">Web Service </span>per la comunicazione fra
        le componenti. Tecnologie e linguaggi utilizzati: PHP, Laravel, React,
        Node.js e altri.
      </>
    ),
    frontend: (
      <>
        I progetti di Frontend qui presenti riguardano la realizzazione di siti
        Web <span className="clr-accent">responsivi</span> e performanti, curati
        nei <span className="clr-accent">minimi dettagli</span>, dalle landing
        page ai siti completi. Le soluzioni adottate includono l'uso di
        framework e librerie come Bootstrap, Tailwind, React, Antd e altri.
      </>
    ),
    test: (
      <>
        La categoria dei prototipi include progetti sperimentali che esplorano{" "}
        <span className="clr-accent">nuove tecnologie</span> e concetti di
        design. Gli esperimenti riguardano l'uso di API, CMS, l'implementazione
        di interfacce utente innovative ecc.
      </>
    ),
  };

  const handleClick = useCallback((e) => {
    setCurrentMenu(e.key);
    setProjectsToShow(4); // Resetta il conteggio dei progetti da mostrare quando si cambia la sezione
  }, []);

  useEffect(() => {
    const filteredProjects = projects.filter((project) =>
      currentMenu === "all" ? true : project.category === currentMenu
    );

    setDisplayedProjects(
      filteredProjects
        .slice(0, projectsToShow)
        .sort((a, b) => b.importance - a.importance)
    );
  }, [currentMenu, projectsToShow]);

  const handleShowMoreClick = useCallback(() => {
    setProjectsToShow(projectsToShow + 4);
  }, [projectsToShow]);

  const handleShowLessClick = useCallback(() => {
    setProjectsToShow(4);
  }, []);

  const filteredProjects = projects.filter((project) =>
    currentMenu === "all" ? true : project.category === currentMenu
  );

  return (
    <section id="projects" className="projects lg:px-7 w-full mt-10">
      <h2 className="fs-h2 fw-h-bold clr-neutral h2-b-side basis-[100%]">
        Progetti.
      </h2>
      <div className="">
        <Menu
          onClick={handleClick}
          selectedKeys={[currentMenu]}
          mode="horizontal"
          className="px-2 py-2 overflow-x-scroll flex justify-center"
          style={{
            background: "none",
            borderBottom: "none",
          }}
        >
          <Menu.Item key="all">Tutti</Menu.Item>
          <Menu.Item key="webapp">Web App</Menu.Item>
          <Menu.Item key="frontend">Frontend</Menu.Item>
          <Menu.Item key="test" className="margin-0">
            Prototipi
          </Menu.Item>
        </Menu>

        {/* Sottotitolo descrittivo della sezione */}
        <article className="mx-auto max-w-[600px] mb-5">
          <h6 className="md:text-center my-2 md:my-0 fw-b-thin text-justify clr-neutral">
            {contentMap[currentMenu]}
          </h6>
        </article>

        {/* Mappatura dei progetti filtrati */}

        <motion.div
          id="projectsWrapper"
          className="flex flex-wrap gap-3 justify-between"
        >
          <AnimatePresence>
            <Suspense fallback={<div>Caricamento...</div>}>
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  imgPath={project.imgPath}
                  repoLink={project.repoLink}
                  demoLink={project.demoLink}
                  videoLink={project.videoLink}
                />
              ))}
            </Suspense>
          </AnimatePresence>
        </motion.div>
      </div>
      {/* Mostra meno o più button */}
      <div className="btn-container">
        {projectsToShow < filteredProjects.length && (
          <button className="up-transition" onClick={handleShowMoreClick}>
            Mostra altri ...
          </button>
        )}
        {projectsToShow > 4 && (
          <button className="up-transition" onClick={handleShowLessClick}>
            Mostra meno <i className="fa-regular fa-eye-slash"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
