import { useState } from "react";
import { Menu } from "antd";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

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
      tech: ["React", "JS", "MySQL"],
      imgPath:
        "https://images.unsplash.com/photo-1567581634552-3ed9154ae627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
      repoLink: "",
      demoLink: "",
    },
    {
      id: 2,
      title: "Progetto 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem agaga suua ayta ayay",
      importance: 5,
      category: "frontend",
      tech: ["HTML", "CSS", "JavaScript"],
      imgPath:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      repoLink: "https://github.com/example/progetto2",
      demoLink: "",
    },
    {
      id: 3,
      title: "Progetto 3",
      description: "Vivamus et nisi ut sapien ultricies dapibus",
      importance: 0,
      category: "test",
      tech: ["Cypress", "Jest", "React Testing Library"],
      imgPath:
        "https://colibriwp.com/blog/wp-content/uploads/2019/11/colibri-business.png",
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
      imgPath:
        "https://assets.justinmind.com/wp-content/uploads/2020/10/hero-image-illustration-airbnb.png",
      repoLink: "",
      demoLink: "https://example.com/progetto4",
    },
    {
      id: 5,
      title: "Progetto 5",
      description: "Pellentesque cursus ligula id ligula laoreet imperdiet",
      importance: 1,
      category: "webapp",
      tech: ["Node.js", "Express", "MongoDB"],
      imgPath:
        "https://peterdraw.studio/wp-content/uploads/2022/01/TixCenter-Ticket-Booking-Website-Hero-Section.png",
      repoLink: "",
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
          <Menu.Item key="test" className="margin-0">
            Test
          </Menu.Item>
        </Menu>

        {/* Mappatura dei progetti filtrati */}

        <motion.div
          layout
          id="projectsWrapper"
          className="flex flex-wrap gap-3 justify-center"
        >
          <AnimatePresence>
            {filteredProjects
              .sort((a, b) => b.importance - a.importance)
              .map((project) => (
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
