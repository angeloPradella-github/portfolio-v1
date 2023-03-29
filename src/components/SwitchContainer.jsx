import { useState, useEffect } from "react";
import { Tooltip } from "antd";

const themeStyles = {
  normal: {
    "--clr-neutral": "#cdcdcd",
    "--clr-neutral-opaque": "#cdcdcd5b",
    "--clr-light": "#292929",
    "--clr-dark": "#e6e6e6",
  },
  dark: {
    "--clr-neutral": "#444452",
    "--clr-neutral-opaque": "#4444523d",
    "--clr-light": "#fffbfb",
    "--clr-dark": "#111",
  },
};

export default function SwitchContainer() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "normal"
  );
  // Questo useEffect viene eseguito ogni volta che cambia il valore di currentTheme (o quando montato la prima volta), così da poi richiamare la funzione setStyles per impostare il nuovo CSS
  useEffect(() => {
    setStyles();
  }, [currentTheme]);

  // Utilizzo Object.entries per avere un array chiave-valore dall'oggetto styles, per poi usare un forEach per impostare ogni proprietà di stile sull'elemento document.documentElement
  const setStyles = () => {
    const styles = themeStyles[currentTheme];
    Object.entries(styles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  //Switchiamo in base al tema corrente mettendo quello opposto
  const handleToggle = () => {
    const newTheme = currentTheme === "normal" ? "dark" : "normal";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="switch-container flex flex-col clr-neutral justify-end gap-8">
      <Tooltip title="Tema" placement="right">
        <input
          onChange={handleToggle}
          type="checkbox"
          id="switch"
          checked={currentTheme !== "dark"} //Per far partire lo switch nella modaltà corrente
        />
        <label htmlFor="switch">Toggle</label>
      </Tooltip>
      <div className="line"></div>
    </div>
  );
}
