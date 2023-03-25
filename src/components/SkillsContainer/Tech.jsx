import { Tag, Menu } from "antd";
import { useState } from "react";
import "./skillsStyles.css";

const Tech = ({ tagContainerStyle }) => {
  const [currentTab, setCurrentTab] = useState("tecnologie");

  const handleClick = (e) => {
    setCurrentTab(e.key);
  };

  const renderContent = () => {
    switch (currentTab) {
      case "tecnologie":
        return (
          <>
            {/* Sezione frontend */}
            <h5 className="mt-4">
              <span className="clr-accent ">Tech</span>.
            </h5>
            <div className="flex flex-wrap gap-2 mb-4">
              <article className="mr-4">
                <p className="text-sm opacity-60">Consolidati</p>
                <div style={tagContainerStyle}>
                  <Tag color="#5454ec">Ajax</Tag>
                  <Tag color="#5454ec">Axios</Tag>
                  <Tag color="#5454ec">Eloquent</Tag>
                </div>
              </article>

              <article className="">
                <p className="text-sm opacity-60">Familiari o Apprendimento</p>
                <div style={tagContainerStyle}>
                  <Tag color="#563d7c">MySQL</Tag>
                </div>
              </article>
            </div>
          </>
        );
      case "librerie":
        return (
          <>
            {/* Sezione backend */}
            <h5 className="mt-4">
              <span className="clr-accent ">Librerie.</span>
            </h5>
            <div className="flex flex-wrap gap-2">
              <article className="mr-4">
                <p className="text-sm opacity-60">Consolidati</p>
                <div style={tagContainerStyle}>
                  <Tag color="#F05340">Livewire</Tag>
                  <Tag color="#68A063">NodeJS</Tag>
                </div>
              </article>

              <article className="">
                <p className="text-sm opacity-60">Familiari o Apprendimento</p>
                <div style={tagContainerStyle}>
                  <Tag color="#68A063">JQuery</Tag>
                  <Tag color="#68A063">Ant Design</Tag>
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
        <Menu.Item key="tecnologie">Tecnologie</Menu.Item>
        <Menu.Item key="librerie">Librerie</Menu.Item>
      </Menu>
      {renderContent()}
    </>
  );
};

export default Tech;
