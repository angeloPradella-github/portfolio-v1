// Creazione dell'array di progetti finti
export const projects = [
  {
    id: 1,
    title: "Presto.it",
    description: (
      <>
        <date dateTime="2023-02-22" className="clr-accent">
          02/23
        </date>{" "}
        • Portale di annunci, realizzato in team con modalità Agile ed una
        deadline stretta, Demo e dettagli nel video.{" "}
        <a
          className="clr-accent underline"
          href="shorturl.at/kqzF4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backlog
        </a>{" "}
        prodotto.
      </>
    ),
    importance: 6,
    category: "webapp",
    tech: ["Laravel/PHP", "Google Vision API", "MySQL", "Vite"],
    imgPath: "src/assets/images/projects/presto_store.jpg",
    placeholderPath: "src/assets/images/projects/presto_store-compressed.jpg",
    repoLink: "https://gitlab.com/hackademy-62/stuckonthecode",
    demoLink: "",
    videoLink: "https://www.youtube.com/watch?v=wJjnfwaC15Q",
  },
  {
    id: 2,
    title: "Italian Tour",
    description: (
      <>
        <date dateTime="2021-06-15" className="clr-accent">
          06/21
        </date>{" "}
        • Sito di viaggi che offre mappe interattive, eventi, sulle migliori
        mete turistiche sul territorio.
      </>
    ),
    importance: 5,
    category: "webapp",
    tech: ["HTML", "CSS/JS", "MySQL", "PHP"],
    imgPath: "src/assets/images/projects/italian_tour.jpg",
    placeholderPath: "src/assets/images/projects/italian_tour-compressed.jpg",
    repoLink: "",
    demoLink: "",
    videoLink: "https://www.youtube.com/watch?v=e_PjhXpbzH4",
  },
  {
    id: 3,
    title: "SmartWatch Store",
    description: (
      <>
        <date dateTime="2023-01-06" className="clr-accent">
          01/23
        </date>{" "}
        • Landing page immersiva con design personalizzato, stile Apple, nella
        quale ho creato un effetto di{" "}
        <a
          className="clr-accent underline"
          href="https://www.thecodecreative.com/blog/scrolljacking-explained"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scroll Jacking
        </a>{" "}
        personalizzato verso la fine.
      </>
    ),
    importance: 2,
    category: "frontend",
    tech: ["Intersection Observer", "CSS/JS", "Scroll Magic"],
    imgPath: "src/assets/images/projects/smartwatch_store.jpg",
    placeholderPath:
      "src/assets/images/projects/smartwatch_store-compressed.jpg",
    repoLink:
      "https://gitlab.com/hackademy-62/angelo-pradella-presto/-/tree/master",
    demoLink: "https://hackademy-62.gitlab.io/angelo-pradella-presto/",
    videoLink: "",
  },
  {
    id: 4,
    title: "Streaming Platform",
    description: (
      <>
        <time dateTime="2022-12-08" className="clr-accent">
          12/22
        </time>{" "}
        • Landing page di un sito di Streaming Film e serie TV, reso
        estremamente dinamico solo con vanilla JS. Ricerca titoli dinamica, e
        carosello Swiper flessibile.
      </>
    ),
    importance: 1,
    category: "frontend",
    tech: ["CSS/JS", "SwiperJS"],
    imgPath: "src/assets/images/projects/streaming_blog.jpg",
    placeholderPath: "src/assets/images/projects/streaming_blog-compressed.jpg",
    repoLink: "https://gitlab.com/hackademy-62/anime-blog-pradella/",
    demoLink: "https://hackademy-62.gitlab.io/anime-blog-pradella/",
    videoLink: "",
  },
  {
    id: 5,
    title: "Layout Bootstrap n.1",
    description: (
      <>
        <time dateTime="2022-11-16" className="clr-accent">
          11/22
        </time>{" "}
        • Un caso di studio in cui ho concretizzato responsivamente un semplice
        Design.
      </>
    ),
    importance: 1,
    category: "frontend",
    tech: ["Bootstrap", "CSS/JS"],
    imgPath: "src/assets/images/projects/bootstrap_layout_1.jpg",
    placeholderPath:
      "src/assets/images/projects/bootstrap_layout_1-compressed.jpg",
    repoLink: "",
    demoLink: "https://hackademy-62.gitlab.io/angelo-prdaella-project-red/",
    videoLink: "",
  },
  {
    id: 6,
    title: "Layout Bootstrap n.2",
    description: (
      <>
        <time dateTime="2022-12-12" className="clr-accent">
          12/22
        </time>
        • Un caso di studio in cui ho concretizzato responsivamente un Design
        più accattivamente.
      </>
    ),
    importance: 1,
    category: "frontend",
    tech: ["Bootstrap", "CSS/JS"],
    imgPath: "src/assets/images/projects/bootstrap_layout_2.jpg",
    placeholderPath:
      "src/assets/images/projects/bootstrap_layout_2-compressed.jpg",
    repoLink: "https://gitlab.com/hackademy-62/angelo-pradella-project-black/",
    demoLink: "https://hackademy-62.gitlab.io/angelo-pradella-project-black/",
    videoLink: "",
  },
  {
    id: 7,
    title: "Layout Bootstrap n.3",
    description: (
      <>
        <time dateTime="2022-12-20" className="clr-accent">
          12/22
        </time>{" "}
        • Un caso di studio in cui ho concretizzato responsivamente un Design in
        team.
      </>
    ),
    importance: 2,
    category: "frontend",
    tech: ["Bootstrap", "CSS/JS"],
    imgPath: "src/assets/images/projects/bootstrap_layout_3.jpg",
    placeholderPath:
      "src/assets/images/projects/bootstrap_layout_3-compressed.jpg",
    repoLink:
      "https://gitlab.com/hackademy-62/project-blue-pradella_bartucci_zizzi",
    demoLink:
      "https://hackademy-62.gitlab.io/project-blue-pradella_bartucci_zizzi/",
    videoLink: "",
  },
  {
    id: 8,
    title: "Portfolio v1",
    description: (
      <>
        <time dateTime="2023-03-20" className="clr-accent">
          03/23
        </time>{" "}
        • Versione 1 del mio Portfolio realizzato per la prima volta
        completamente in React con Design di mia interpretazione.
      </>
    ),
    importance: 3,
    category: "frontend",
    tech: ["React/JS", "Vite", "Antd"],
    imgPath: "src/assets/images/projects/portfolio_v1.jpg",
    placeholderPath: "src/assets/images/projects/portfolio_v1-compressed.jpg",
    repoLink: "https://github.com/angeloPradella-github/portfolio-v1",
    demoLink: "",
    videoLink: "",
  },
];
