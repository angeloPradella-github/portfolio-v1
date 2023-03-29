export default function Footer() {
  return (
    <footer className="mt-20 md:mb-5  w-full md:px-16">
      <div className="footer clr-neutral rounded-lg mx-auto md:shadow-lg max-w-[900px]">
        <div className=" md:p-6 p-4 flex flex-col md:flex-row  items-center md:justify-between justify-center ">
          <span className="text-sm sm:text-center">
            2023 © Made with <span className="clr-accent">React </span>
            by Angelo G. Pradella
          </span>

          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 gap-2 md:gap-3">
            <li>
              <a href="#about" className="underline-hover md:mr-6 ">
                Profilo
              </a>
            </li>
            <li>
              <a href="#skills" className="underline-hover md:mr-6">
                Competenze
              </a>
            </li>
            <li>
              <a href="#pojects" className="underline-hover md:mr-6">
                Progetti
              </a>
            </li>
            <li>
              <a href="#contacts" className="underline-hover">
                Contattami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
