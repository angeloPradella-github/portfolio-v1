export default function HeroSection() {
  return (
    <section className="hero-section mx-auto">
      <h4 className="ff-accent clr-accent mb-5">Ciao, sono</h4>
      <h1 className="fw-h-bold">Angelo G. Pradella</h1>
      <p className="max-w-lg">
        Perito informatico con competenze
        <span className="clr-accent"> FullStack</span> di sviluppo Web,
        appassionato per la progettazione di interfacce ed esperienze digitali
        uniche.
      </p>
      <div className="btn-container flex gap-3 mt-6">
        <a className="btn-big ff-accent btn-empty up-transition" href="#">
          CONTATTAMI
        </a>
        <a className="btn-big ff-accent btn-full up-transition" href="#">
          PROGETTI
        </a>
      </div>
    </section>
  );
}
