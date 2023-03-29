import Intersecting from "./Intersecting";
import ProfilePic from "../assets/img_square1.jpg";
import { Tooltip } from "antd";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="about-me mx-auto max-w-[900px] flex flex-col place-items-start text-lg md:text-xl"
    >
      <div className="flex flex-wrap">
        {/* ------------Description colum------------ */}
        <Intersecting.div className="w-full lg:w-2/3 lg:px-7">
          <Intersecting.h2
            threshold={0.1}
            className="fs-h2 fw-h-bold clr-neutral h2-b-side"
          >
            Profilo.
          </Intersecting.h2>
          <p className="mt-3 text-justify lg:text-left">
            Dopo aver conseguito il diploma di Perito Informatico, ho
            approfondito il mio interesse per lo{" "}
            <span className="clr-accent">sviluppo web</span> attraverso un corso
            di formazione FullStack, ampliando le mie competenze sia in ambito
            front-end che back-end.
          </p>
          <p className="mt-3 text-justify lg:text-left">
            Le mie principali competenze includono la programmazione orientata
            agli oggetti e lo sviluppo di applicazioni web dinamiche con
            l'utilizzo di diversi linguaggi, framework e tecnologie. Ho maturato
            esperienza con architetture <span className="clr-accent">MVC</span>,
            in particolare Laravel, e nella gestione di interazioni
            Client-Server tramite chiamate a{" "}
            <span className="clr-accent">Webservice</span>.
          </p>
          <p className="mt-3 text-justify lg:text-left">
            Nel mio lavoro, ambisco a coniugare tecnica e creatività,
            valorizzando le mie competenze informatiche per dar vita a soluzioni
            web efficaci e piacevoli da utilizzare.
          </p>
        </Intersecting.div>
        {/* ------------Photo colum------------ */}
        <Intersecting.div
          threshold={0.7}
          className="w-full lg:w-1/3 mt-5 lg:mt-0 lg:p-7 flex justify-center"
        >
          <img
            className="profile-pic"
            src={ProfilePic}
            alt="Immagine Profilo"
          />
        </Intersecting.div>
        {/* ------------Extra info row------------ */}
        <Intersecting.section className="mt-6 w-full lg:px-7" threshold={0.5}>
          <div className="flex flex-wrap gap-3 justify-between extra-info-wrapper px-4 py-2">
            <div>
              <h4>Sede</h4>{" "}
              <Tooltip title="Disponibile al Trasferimento">
                <p className="text-base clr-neutral fw-b-bold">
                  Trieste, Italia
                </p>
              </Tooltip>
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
              <Tooltip title="Nuovi Progetti, Certificati...">
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
              </Tooltip>
            </div>

            <div>
              <h4>Curriculum</h4>{" "}
              <Tooltip title="Formazione, Istruzione...">
                <p className="text-base clr-neutral fw-b-bold flex gap-2">
                  Online PDF{" "}
                  <a
                    href="https://drive.google.com/file/d/1-ou0ULzuRT-2NYwDZU733-PTc87l6tZk/view?usp=share_link"
                    target="_blank"
                    className="cursor-pointer up-transition fa-solid fa-file-arrow-down"
                  ></a>
                </p>
              </Tooltip>
            </div>
          </div>
        </Intersecting.section>
      </div>
    </section>
  );
}
