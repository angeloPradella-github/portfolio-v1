import { Tag } from "antd";

const Languages = ({ tagContainerStyle }) => {
  return (
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
  );
};

export default Languages;
