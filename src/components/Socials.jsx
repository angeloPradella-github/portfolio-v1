import { Tooltip } from "antd";

export default function Socials() {
  return (
    <div className="socials-container flex flex-col justify-between clr-neutral gap-6">
      <div className="flex flex-col justify-between h-[180px]">
        <Tooltip title="GitHUB" placement="left">
          <a href="https://github.com/angeloPradella-github">
            <i className="icon up-transition fa-brands fa-github"></i>
          </a>
        </Tooltip>
        <Tooltip title="GitLAB" placement="left">
          <a href="https://gitlab.com/angelopradella">
            <i className="icon up-transition fa-brands fa-square-gitlab"></i>
          </a>
        </Tooltip>
        <Tooltip title="Linkedin" placement="left">
          <a href="https://www.linkedin.com/in/angelo-giovanni-pradella-fullstack-web-developer/">
            <i className="icon up-transition fa-brands fa-linkedin"></i>
          </a>
        </Tooltip>
        <Tooltip title="YouTube" placement="left">
          <a href="">
            <i className="icon up-transition fa-brands fa-square-youtube"></i>
          </a>
        </Tooltip>
      </div>
      <div className="line"></div>
    </div>
  );
}
