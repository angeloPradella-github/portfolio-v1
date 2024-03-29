import React, { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsContainer/SkillsSection";
import LoadingFallback from "../components/FallbackSpinners/LoadingFallback";

const ProjectsSection = lazy(() =>
  import("../components/ProjectsSection/ProjectsSection")
);
const ContactSection = lazy(() => import("../components/ContactSection"));

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <Suspense fallback={<LoadingFallback />}>
        <ProjectsSection />
        <ContactSection />
      </Suspense>
    </>
  );
}
