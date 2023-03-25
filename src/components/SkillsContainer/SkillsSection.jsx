import { useState } from "react";
import { Tabs } from "antd";
import { useMediaQuery } from "react-responsive";

// Sezioni
import Languages from "./Languages";
import FrameworksAndTech from "./FrameworksAndTech";
import Software from "./Software";
import SoftSkills from "./SoftSkills";

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
    paddingLeft: "10px",
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
      // ---------------Tecnologie e framework---------------
      key: "2",
      children: <Tabs items={Languages({ tagContainerStyle })} />,
    },
    {
      label: (
        <>
          <h6>Software</h6>
        </>
      ),
      key: "3",
      children: <Software tagContainerStyle={tagContainerStyle} />,
    },
    {
      label: (
        <>
          <h6>Soft-SKills</h6>
        </>
      ),
      key: "5",
      children: <SoftSkills tagContainerStyle={tagContainerStyle} />,
    },
  ];

  return (
    <section
      id="skills"
      className="skills lg:px-7 max-w-max justify-start flex mt-20 flex-wrap"
    >
      <h2 className="fs-h2 fw-h-bold clr-neutral h2-b-side basis-[100%]">
        Skills.
      </h2>
      <Tabs
        tabPosition={isMobile ? "top" : "left"}
        tabBarGutter={isMobile ? 10 : undefined}
        activeKey={activeKey}
        onChange={handleTabChange}
        items={tabItems}
        style={{}}
        className="w-full clr-neutral ff-normal fs-p"
      />
    </section>
  );
}
