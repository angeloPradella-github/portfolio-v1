import { Tag } from "antd";

const SoftSkills = ({ tagContainerStyle }) => {
  return (
    <>
      <h5>Abilità Personali</h5>
      <div style={tagContainerStyle}>
        <Tag color="purple">Problem Solving</Tag>
        <Tag color="magenta">Comunicazione</Tag>
        <Tag color="red">Lavoro di Squadra</Tag>
      </div>
    </>
  );
};

export default SoftSkills;
