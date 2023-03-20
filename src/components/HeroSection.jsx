export default function HeroSection() {
  return (
    <div className="hero-section mx-auto">
      <h4 className="ff-accent clr-accent mb-5">Ciao, sono</h4>
      <h1 className="fw-h-bold">Angelo G. Pradella</h1>
      <p className="max-w-lg">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at
        <span className="clr-accent">Upstatement</span>.
      </p>
      <div className="btn-container flex gap-3 mt-6">
        <a className="btn-big ff-accent btn-empty up-transition" href="#">
          CONTATTAMI
        </a>
        <a className="btn-big ff-accent btn-full up-transition" href="#">
          PROGETTI
        </a>
      </div>
    </div>
  );
}
