export default function HeroSection() {
  return (
    <section className="hero-section mx-auto">
      <h5 className="ff-accent clr-accent mb-5">Ciao, sono</h5>
      <h1 className="fw-h-bold">Angelo G. Pradella</h1>
      <p className="max-w-lg text-justify md:text-left">
        Perito informatico con competenze
        <span className="clr-accent"> FullStack</span> di sviluppo Web,
        appassionato per la progettazione di interfacce ed esperienze digitali
        uniche.
      </p>
      <div className="btn-container flex flex-col md:flex-row gap-3 mt-6 ">
        <a
          className="max-w-[154px] btn-big ff-accent btn-empty up-transition"
          href="#"
        >
          CONTATTAMI
        </a>
        <a
          className="max-w-[154px] btn-big ff-accent btn-full up-transition text-center"
          href="#"
        >
          PROGETTI
        </a>
      </div>
    </section>
  );
}
