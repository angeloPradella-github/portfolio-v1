import React, { useState } from "react";
import { Tabs } from "antd";
import { useMediaQuery } from "react-responsive";

// Sezioni
import Languages from "./Languages";
import Framework from "./Framework";
import Tech from "./Tech";
import Software from "./Software";
import SoftSkills from "./SoftSkills";

const MemoizedTabs = React.memo(
  ({ tagContainerStyle, activeKey, handleTabChange, tabItems, isMobile }) => (
    <Tabs
      tabPosition={isMobile ? "top" : "left"}
      tabBarGutter={isMobile ? 10 : undefined}
      activeKey={activeKey}
      onChange={handleTabChange}
      items={tabItems}
      className="w-full clr-neutral ff-normal fs-p overflow-x-scroll"
    />
  )
);

export default function SkillsSection() {
  const [activeKey, setActiveKey] = useState("1");
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const tagContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "5px",
  };

  const tabItems = [
    {
      label: (
        <>
          <h6>Linguaggi</h6>
        </>
      ),
      key: "1",
      children: <Languages tagContainerStyle={tagContainerStyle} />,
    },
    {
      label: (
        <>
          <h6>Framework</h6>
        </>
      ),
      key: "2",
      children: <Framework tagContainerStyle={tagContainerStyle} />,
    },
    {
      label: (
        <>
          <h6>Tecnologie</h6>
        </>
      ),
      key: "3",
      children: <Tech tagContainerStyle={tagContainerStyle} />,
    },
    {
      label: (
        <>
          <h6>Software</h6>
        </>
      ),
      key: "4",
      children: <Software tagContainerStyle={tagContainerStyle} />,
    },
    {
      label: (
        <>
          <h6>Soft-Skills</h6>
        </>
      ),
      key: "5",
      children: <SoftSkills tagContainerStyle={tagContainerStyle} />,
    },
  ];

  return (
    <section
      id="skills"
      className="skills mx-auto justify-start flex mt-20 flex-wrap lg:px-7"
    >
      <h2 className="fs-h2 fw-h-bold clr-neutral h2-b-side basis-[100%]">
        Skills.
      </h2>
      <MemoizedTabs
        tagContainerStyle={tagContainerStyle}
        activeKey={activeKey}
        handleTabChange={handleTabChange}
        tabItems={tabItems}
        isMobile={isMobile}
      />
    </section>
  );
}
