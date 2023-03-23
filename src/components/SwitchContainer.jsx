import { useState } from "react";

export default function SwitchContainer() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.style.setProperty("--clr-neutral", "#cdcdcd");
      document.documentElement.style.setProperty(
        "--clr-neutral-opaque",
        "#cdcdcd5b"
      );
      document.documentElement.style.setProperty("--clr-light", "#292929");
      document.documentElement.style.setProperty("--clr-dark", "#e6e6e6");
    } else {
      document.documentElement.style.setProperty("--clr-neutral", "#444452");
      document.documentElement.style.setProperty(
        "--clr-neutral-opaque",
        "#4444523d"
      );
      document.documentElement.style.setProperty("--clr-light", "#fffbfb");
      document.documentElement.style.setProperty("--clr-dark", "#111");
    }
  };

  return (
    <div className="switch-container flex flex-col clr-neutral justify-end gap-8">
      <div
        className="c-tooltip relative"
        onChange={handleToggle}
        aria-label="Cambia Tema"
        data-direction="right"
      >
        <input type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
      </div>

      <div className="line"></div>
    </div>
  );
}
