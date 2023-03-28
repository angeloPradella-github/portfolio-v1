import React, { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsContainer/SkillsSection";
const ProjectsSection = lazy(() =>
  import("../components/ProjectsSection/ProjectsSection")
);

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
    </>
  );
}
