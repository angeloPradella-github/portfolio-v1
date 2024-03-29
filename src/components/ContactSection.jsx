export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="mt-20 contact clr-neutral mx-auto max-w-[500px]"
    >
      <h2 className="fs-h2 fw-h-bold text-center clr-neutral">
        Entriamo in Contatto.
      </h2>
      <div className="container flex flex-col items-center md:px-4">
        <p className="text-justify md:text-center fw-b-thin">
          Anche se attualmente non sono alla ricerca di lavoro, sarei comunque
          lieto di discutere qualsiasi opportunità interessante nell'ambito
          dello sviluppo Web, specialmente{" "}
          <span className="clr-accent">Frontend</span>, inclusi progetti{" "}
          <span className="clr-accent">FullStack</span>.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&amp;to=angelogpradella@gmail.com"
          target="_blank"
          className="btn btn-empty up-transition mt-4"
        >
          Inviami una Mail
        </a>
      </div>
    </section>
  );
}
