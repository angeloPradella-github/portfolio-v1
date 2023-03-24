import { Tag } from "antd";

const FrameworksAndTech = ({ tagContainerStyle }) => {
  return (
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
  );
};

export default FrameworksAndTech;
