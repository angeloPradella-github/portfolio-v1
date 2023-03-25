import { Tag } from "antd";

const SoftSkills = ({ tagContainerStyle }) => {
  return (
    <>
      <h5>Abilità Personali</h5>
      <div style={tagContainerStyle}>
        <Tag color="purple">Problem Solving</Tag>
        <Tag color="blue">Comunicazione</Tag>
        <Tag color="red">Lavoro di Squadra</Tag>
        <Tag color="green">Dedizione</Tag>
      </div>
    </>
  );
};

export default SoftSkills;
