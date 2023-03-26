import { useState } from "react";
import { Menu } from "antd";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [currentMenu, setCurrentMenu] = useState("all");

  // Creazione dell'array di progetti finti
  const projects = [
    {
      id: 1,
      title: "Progetto 1",
      description: "lorem Ipsum dolor sit amet",
      importance: 4,
      category: "webapp",
      tech: ["react", "js", "larave"],
      imgPath: "lorempicusm",
      repoLink: "",
      demoLink: "",
    },
    {
      id: 2,
      title: "Progetto 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      importance: 5,
      category: "frontend",
      tech: ["HTML", "CSS", "JavaScript"],
      imgPath: "lorempicsum",
      repoLink: "https://github.com/example/progetto2",
      demoLink: "https://example.com/progetto2",
    },
    {
      id: 3,
      title: "Progetto 3",
      description: "Vivamus et nisi ut sapien ultricies dapibus",
      importance: 0,
      category: "test",
      tech: ["Cypress", "Jest", "React Testing Library"],
      imgPath: "lorempicsum",
      repoLink: "https://github.com/example/progetto3",
      demoLink: "https://example.com/progetto3",
    },
    {
      id: 4,
      title: "Progetto 4",
      description: "Pellentesque cursus ligula id ligula laoreet imperdiet",
      importance: 1,
      category: "webapp",
      tech: ["Node.js", "Express", "MongoDB"],
      imgPath: "lorempicsum",
      repoLink: "https://github.com/example/progetto4",
      demoLink: "https://example.com/progetto4",
    },
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

        <section
          id="projectsWrapper"
          className="flex flex-wrap gap-3 justify-center"
        >
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
