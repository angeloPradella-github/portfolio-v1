import { useState } from "react";
import { Menu } from "antd";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [currentMenu, setCurrentMenu] = useState("all");

  // Creazione dell'array di progetti finti
  const projects = [
    { id: 1, title: "Progetto 1", category: "webapp" },
    { id: 2, title: "Progetto 2", category: "frontend" },
    { id: 3, title: "Progetto 3", category: "test" },
    { id: 4, title: "Progetto 4", category: "webapp" },
  ];

  const handleClick = (e) => {
    setCurrentMenu(e.key);
  };

  // Filtraggio dei progetti in base al currentMenu
  const filteredProjects = projects.filter((project) =>
    currentMenu === "all" ? true : project.category === currentMenu
  );

  return (
    <section id="projects" className="projects lg:px-7 w-full mt-20">
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
          <Menu.Item key="test">Test</Menu.Item>
        </Menu>

        {/* Mappatura dei progetti filtrati */}

        <section id="projectsWrapper" className="flex flex-wrap justify-center">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;
