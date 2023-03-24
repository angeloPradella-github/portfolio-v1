import { useState } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";

export default function SkillsSection() {
  const [activeKey, setActiveKey] = useState("1");

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
      children: (
        <>
          <h5 className="clr-accent">Frontend.</h5>

          <p className="text-sm opacity-60">Consolidati</p>
          <div style={tagContainerStyle}>
            <Tag color="#f06529df">HTML</Tag>
            <Tag color="#2965f1df">CSS</Tag>
            <Tag color="#fadb14df">JavaScript</Tag>
          </div>

          <h5 className="mt-4 clr-accent">Backend.</h5>
          <div className="flex flex-wrap gap-2">
            <article className="mr-4">
              <p className="text-sm opacity-60">Consolidati</p>
              <div style={tagContainerStyle}>
                <Tag color="#7b74e8">PHP</Tag>
              </div>
            </article>

            <article className="">
              <p className="text-sm opacity-60">Familiari o Apprendimento</p>
              <div style={tagContainerStyle}>
                <Tag color="#f89820">Java</Tag>
                <Tag color="#5E97D0">C++</Tag>
              </div>
            </article>
          </div>
        </>
      ),
    },
    {
      label: (
        <>
          <h6>
            Framework e<br />
            Tecnologie
          </h6>
        </>
      ),
      // ---------------Tecnologie e framework---------------
      key: "2",
      children: (
        <>
          <h5 className="clr-accent">Framework.</h5>
          {/* Sezione frontend */}
          <h4>Frontend</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <article className="mr-4">
              <p className="text-sm opacity-60">Consolidati</p>
              <div style={tagContainerStyle}>
                <Tag color="#563d7c">Bootstrap</Tag>
                <Tag color="#5454ec">Tailwind</Tag>
              </div>
            </article>

            <article className="">
              <p className="text-sm opacity-60">Familiari o Apprendimento</p>
              <div style={tagContainerStyle}>
                <Tag color="#3abee0">React</Tag>
                <Tag style={{ backgroundColor: "light" }}>
                  {" "}
                  <span className="clr-neutral">NextJS</span>
                </Tag>
              </div>
            </article>
          </div>
          {/* Sezione backend */}
          <h4>backend</h4>
          <div className="flex flex-wrap gap-2">
            <article className="mr-4">
              <p className="text-sm opacity-60">Consolidati</p>
              <div style={tagContainerStyle}>
                <Tag color="#563d7c">Bootstrap</Tag>
                <Tag color="#5454ec">Tailwind</Tag>
              </div>
            </article>

            <article className="">
              <p className="text-sm opacity-60">Familiari o Apprendimento</p>
              <div style={tagContainerStyle}>
                <Tag color="hsl(0.53,0.8,0.67)">React</Tag>
              </div>
            </article>
          </div>
        </>
      ),
    },
    {
      label: (
        <>
          <h6>Software</h6>
        </>
      ),
      key: "3",
      children: (
        <>
          <h5>Strumenti di Sviluppo</h5>
          <div style={tagContainerStyle}>
            <Tag color="cyan">GIT</Tag>
            <Tag color="blue">Console Unix</Tag>
            <Tag color="geekblue">VS Code</Tag>
          </div>
        </>
      ),
    },
    {
      label: (
        <>
          <h6>Soft-SKills</h6>
        </>
      ),
      key: "5",
      children: (
        <>
          <h5>Abilità Personali</h5>
          <div style={tagContainerStyle}>
            <Tag color="purple">Problem Solving</Tag>
            <Tag color="magenta">Comunicazione</Tag>
            <Tag color="red">Lavoro di Squadra</Tag>
          </div>
        </>
      ),
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
        tabPosition="left"
        activeKey={activeKey}
        onChange={handleTabChange}
        items={tabItems}
        style={{}}
        className="max-w-fit clr-neutral ff-normal fs-p"
      />
    </section>
  );
}
