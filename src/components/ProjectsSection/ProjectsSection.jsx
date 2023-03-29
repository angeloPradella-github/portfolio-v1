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
      <div>
        In questa sezione sono presenti tutti i progetti, inclusi quelli di Web
        App, Frontend e Prototipi. Esplorando il portfolio, si potranno
        apprezzare le competenze e le tecnologie utilizzate, come React,
        Next.js, PHP e SQL.
      </div>
    ),
    webapp: (
      <div>
        La sezione Web App comprende applicazioni client-server basate su design
        pattern MVC, come piattaforme di gestione delle attività e sistemi di
        prenotazione. Le tecnologie e i linguaggi utilizzati includono React,
        PHP, SQL, AJAX, Axios e MySQL.
      </div>
    ),
    frontend: (
      <div>
        Raccolta progetti di solo Frontend applicati nella realizzazione di siti
        web responsivi e performanti. Alcuni esempi includono siti sole landing
        page oppre siti web interi come il mio portfolio. <br /> Le soluzioni
        adottate comprendono l'utilizzo di framework e librerie come Bootstrap,
        Tailwind, React ecc.
      </div>
    ),
    test: (
      <div>
        La categoria dei prototipi include progetti sperimentali che esplorano
        nuove tecnologie e concetti di design. Gli esperimenti riguardano l'uso
        di API, CMS, l'implementazione di interfacce utente innovative ecc.
      </div>
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
          <h3 className="text-center my-2 md:my-0">
            {contentMap[currentMenu]}
          </h3>
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
