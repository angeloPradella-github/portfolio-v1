import { Tag } from "antd";

const Software = ({ tagContainerStyle }) => {
  return (
    <>
      <h5>Strumenti di Sviluppo</h5>
      <div style={tagContainerStyle}>
        <Tag color="#E44C30">GIT</Tag>
        <Tag color="#790079">GitHUB</Tag>
        <Tag color="#EF6724">GitLAB</Tag>

        <Tag color="#1C1C1C">Console Unix</Tag>
        <Tag color="#0173C1">VS Code</Tag>
      </div>
    </>
  );
};

export default Software;
