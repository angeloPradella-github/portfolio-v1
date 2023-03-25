import { Tag, Menu } from "antd";
import { useState } from "react";
import "./skillsStyles.css";

const Framework = ({ tagContainerStyle }) => {
  const [currentTab, setCurrentTab] = useState("frontend");

  const handleClick = (e) => {
    setCurrentTab(e.key);
  };

  const renderContent = () => {
    switch (currentTab) {
      case "frontend":
        return (
          <>
            {/* Sezione frontend */}
            <h5 className="mt-4">
              Framework <span className="clr-accent ">Frontend</span>.
            </h5>
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
          </>
        );
      case "backend":
        return (
          <>
            {/* Sezione backend */}
            <h5 className="mt-4">
              Framework <span className="clr-accent ">Backend</span>.
            </h5>
            <div className="flex flex-wrap gap-2">
              <article className="mr-4">
                <p className="text-sm opacity-60">Consolidati</p>
                <div style={tagContainerStyle}>
                  <Tag color="#F05340">Laravel</Tag>
                </div>
              </article>

              <article className="">
                <p className="text-sm opacity-60">Familiari o Apprendimento</p>
                <div style={tagContainerStyle}>
                  <Tag color="#68A063">ExpressJS</Tag>
                </div>
              </article>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[currentTab]}
        mode="horizontal"
        style={{ background: "none", borderBottom: "none" }}
      >
        <Menu.Item key="frontend">Frontend</Menu.Item>
        <Menu.Item key="backend">Backend</Menu.Item>
      </Menu>
      {renderContent()}
    </>
  );
};

export default Framework;
