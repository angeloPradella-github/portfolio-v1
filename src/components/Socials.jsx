export default function Socials() {
  return (
    <div className="socials-container flex flex-col justify-between clr-neutral gap-6">
      <div className="flex flex-col justify-between h-[180px]">
        <a className="h-100" href="">
          <i className="icon up-transition fa-brands fa-github"></i>
        </a>
        <a className="h-100" href="">
          <i className="icon up-transition fa-brands fa-square-gitlab"></i>
        </a>
        <a className="h-100" href="">
          <i className="icon up-transition fa-brands fa-linkedin"></i>
        </a>
        <a className="" href="">
          <i className="icon up-transition fa-brands fa-square-youtube"></i>
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
}
