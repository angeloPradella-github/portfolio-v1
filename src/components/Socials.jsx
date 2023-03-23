export default function Socials() {
  return (
    <div className="socials-container flex flex-col justify-between clr-neutral gap-6">
      <div className="flex flex-col justify-between h-[180px]">
        <a
          className="c-tooltip relative"
          href="https://github.com/angeloPradella-github"
          aria-label="GitHub"
          data-direction="left"
        >
          <i className="icon up-transition fa-brands fa-github"></i>
        </a>
        <a
          className="c-tooltip relative"
          href="https://gitlab.com/angelopradella"
          aria-label="GitLab"
          data-direction="left"
        >
          <i className="icon up-transition fa-brands fa-square-gitlab"></i>
        </a>
        <a
          className="c-tooltip relative"
          href="https://www.linkedin.com/in/angelo-giovanni-pradella-fullstack-web-developer/"
          aria-label="Linkedin"
          data-direction="left"
        >
          <i className="icon up-transition fa-brands fa-linkedin"></i>
        </a>
        <a
          className="c-tooltip relative"
          href=""
          aria-label="YouTube"
          data-direction="left"
        >
          <i className="icon up-transition fa-brands fa-square-youtube"></i>
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
}
