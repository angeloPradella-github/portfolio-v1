// import ProfilePic from "../assets/profile-pic.png";
import ProfilePic from "../assets/img_square1.jpg";

export default function AboutMeSection() {
  return (
    <section className="about-me mx-auto max-w-[900px]">
      <div className="flex flex-wrap">
        {/* ------------Description colum------------ */}
        <div className="w-full md:w-2/3 px-7">
          <h2 className="fs-h2 fw-h-bold clr-neutral h2-b-bottom">Profilo.</h2>
          <p className="mt-3">
            Dopo aver conseguito il diploma di Perito Informatico, ho
            approfondito il mio interesse per lo{" "}
            <span className="clr-accent">sviluppo web</span> attraverso un corso
            di formazione FullStack, ampliando le mie competenze sia in ambito
            front-end che back-end.
          </p>
          <p className="mt-3">
            Le mie principali competenze includono la programmazione orientata
            agli oggetti e lo sviluppo di applicazioni web dinamiche con
            l'utilizzo di diversi linguaggi, framework e tecnologie. Ho maturato
            esperienza con architetture <span className="clr-accent">MVC</span>,
            in particolare Laravel, e nella gestione di interazioni
            Client-Server tramite chiamate a{" "}
            <span className="clr-accent">Webservice</span>.
          </p>
          <p className="mt-3">
            Nel mio lavoro, ambisco a coniugare tecnica e creatività,
            valorizzando le mie competenze informatiche per dar vita a soluzioni
            web efficaci e piacevoli da utilizzare.
          </p>
        </div>
        {/* ------------Photo colum------------ */}
        <div className="w-full md:w-1/3 p-7 flex justify-center">
          <img
            className="profile-pic"
            src={ProfilePic}
            alt="Immagine Profilo"
          />
        </div>
        {/* ------------Extra info row------------ */}
        <section className="mt-6 w-full px-7">
          <div className="flex justify-between extra-info-wrapper px-4 py-2">
            <div>
              <h4>Sede</h4>{" "}
              <p className="text-base clr-neutral fw-b-bold">Trieste, Italia</p>
            </div>

            <div>
              <h4>Email</h4>{" "}
              <p className="text-base clr-neutral fw-b-bold flex items-baseline gap-2">
                angelogpradella@gmail.com
                <a
                  href="mailto:angelogpradella@gmmail.com"
                  className="up-transition cursor-pointer fa-solid fa-arrow-up-right-from-square text-sm"
                ></a>
              </p>
            </div>

            <div>
              <h4>Linkedin</h4>{" "}
              <p className="text-base clr-neutral fw-b-bold flex gap-2">
                {/* <i className="flag-icon flag-icon-it"></i>
                <i className="flag-icon flag-icon-gb"></i> */}
                Le mie attività
                <a
                  href="https://www.linkedin.com/in/angelo-giovanni-pradella-fullstack-web-developer/"
                  target="_blank"
                  className="up-transition cursor-pointer fa-solid fa-arrow-up-right-from-square text-sm"
                ></a>
              </p>
            </div>

            <div>
              <h4>Curriculum</h4>{" "}
              <p className="text-base clr-neutral fw-b-bold flex gap-2">
                Scarica PDF{" "}
                <i className="cursor-pointer up-transition fa-solid fa-file-arrow-down"></i>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
