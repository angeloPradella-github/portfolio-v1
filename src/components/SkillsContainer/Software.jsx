import { Tag } from "antd";

const Software = ({ tagContainerStyle }) => {
  return (
    <>
      <h5>Strumenti di Sviluppo</h5>
      <div style={tagContainerStyle}>
        <Tag color="cyan">GIT</Tag>
        <Tag color="blue">Console Unix</Tag>
        <Tag color="geekblue">VS Code</Tag>
      </div>
    </>
  );
};

export default Software;
