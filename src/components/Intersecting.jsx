import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";

// Funzione che restituisce il componente HOC (Higher-Order Component)
// il quale aggiunge la logica di intersezione all'elemento che gli viene passato come parametro
const IntersectingElement = (Component) => {
  // La funzione ritorna un altro componente funzionale che si prenderà cura di tutto il resto
  return forwardRef(
    (
      {
        children,
        className, // La lista di classi di base per il componente passato come prop
        threshold = 0.5, // La soglia di visibilità per intercettare l'elemento
        animationClass = "fade-in", // La classe CSS che viene utilizzata per animare l'elemento in vista
        ...props
      },
      ref
    ) => {
      const [inViewRef, inView] = useInView({
        threshold,
        triggerOnce: true, // Facciamo in modo che l'effetto di transizione venga visualizzato solo una volta
        ref, // Forniamo il riferimento all'elemento che ci viene passato
      });

      // Creiamo una variabile che contenga la classe CSS da applicare all'elemento
      const isInPage = inView ? "in-page" : "";

      // Restituiamo il componente passato come parametro, aggiungendo le proprietà (prop) che ci sono state passate
      return React.createElement(
        Component,
        {
          ref: inViewRef, // Passiamo il riferimento ottenuto tramite useInView
          className: `${className} ${animationClass} ${isInPage}`, // Aggiungiamo la classe CSS di base, quella che rappresenta l'animazione e quella calcolata per la visibilità dell'elemento
          ...props, // Passiamo tutte le altre proprietà (prop) che ci sono state passate
        },
        children // Passiamo il contenuto dell'elemento, ovvero i suoi figli
      );
    }
  );
};

// Proxy che viene utilizzato per associare un tag HTML al componente IntersectingElement
const Intersecting = new Proxy(
  {},
  {
    get: (_, tagName) => IntersectingElement(tagName),
  }
);

// Esportiamo il componente HOC
export default Intersecting;
