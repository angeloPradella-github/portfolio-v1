import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const IntersectingElement = (Component) => {
  return forwardRef(
    (
      {
        children,
        className,
        threshold = 0.5,
        animationClass = "fade-in",
        ...props
      },
      ref
    ) => {
      const [inViewRef, inView] = useInView({
        threshold,
        triggerOnce: true,
        ref,
      });

      const isInPage = inView ? "in-page" : "";

      return React.createElement(
        Component,
        {
          ref: inViewRef,
          className: `${className} ${animationClass} ${isInPage}`,
          ...props,
        },
        children
      );
    }
  );
};

const Intersecting = new Proxy(
  {},
  {
    get: (_, tagName) => IntersectingElement(tagName),
  }
);

export default Intersecting;
