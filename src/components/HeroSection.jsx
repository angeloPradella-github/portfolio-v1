import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function HeroSection() {
  return (
    <section className="hero-section mx-auto">
      <motion.div
        className="text-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h5 className="ff-accent clr-accent mb-5" variants={item}>
          Ciao, sono
        </motion.h5>
        <motion.h1 className="fw-h-bold" variants={item}>
          Angelo G. Pradella
        </motion.h1>
        <motion.p
          className="max-w-lg text-justify md:text-left fs-med"
          variants={item}
        >
          Perito informatico con competenze
          <span className="clr-accent"> FullStack</span> di sviluppo Web,
          appassionato per la progettazione di interfacce ed esperienze digitali
          uniche.
        </motion.p>
      </motion.div>

      <motion.div
        className="btn-container flex flex-col md:flex-row gap-3 mt-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          className="max-w-[154px] btn-big ff-accent btn-empty up-transition"
          href="#"
          variants={item}
        >
          CONTATTAMI
        </motion.a>
        <motion.a
          className="max-w-[154px] btn-big ff-accent btn-full up-transition text-center"
          href="#projects"
          variants={item}
        >
          PROGETTI
        </motion.a>
      </motion.div>
    </section>
  );
}
