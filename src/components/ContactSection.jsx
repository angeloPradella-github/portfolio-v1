export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="mt-20 contact clr-neutral mx-auto max-w-[500px]"
    >
      <h2 className="fs-h2 fw-h-bold text-center clr-neutral">
        Entriamo in Contatto.
      </h2>
      <div className="container flex flex-col items-center px-4">
        <p className="text-center fw-b-thin">
          Sono attualmente alla ricerca di nuove opportunità di lavoro come
          sviluppatore <span className="clr-accent">Frontend</span>. Ma sarei
          comuqnue lieto di discutere qualsiasi opportunità interessante
          nell'ambito dello sviluppo Web, inclusi progetti{" "}
          <span className="clr-accent">FullStack</span>.
        </p>
        <a href="" className="btn btn-empty up-transition mt-4">
          E-Mail
        </a>
      </div>
    </section>
  );
}
