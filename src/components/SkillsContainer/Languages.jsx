import { Tag, Menu } from "antd";
import { useState } from "react";
import "./skillsStyles.css";

const Languages = ({ tagContainerStyle }) => {
  const [currentTab, setCurrentTab] = useState("frontend");

  const handleClick = (e) => {
    setCurrentTab(e.key);
  };

  const renderContent = () => {
    switch (currentTab) {
      case "frontend":
        return (
          <>
            <h5 className="clr-accent mt-4">Frontend.</h5>
            <p className="text-sm opacity-60">Consolidati</p>
            <div style={tagContainerStyle}>
              <Tag color="#f06529df">HTML</Tag>
              <Tag color="#2965f1df">CSS</Tag>
              <Tag color="#fadb14df">JavaScript</Tag>
            </div>
          </>
        );
      case "backend":
        return (
          <>
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

export default Languages;
