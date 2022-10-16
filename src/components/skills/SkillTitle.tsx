import React from "react";

type Props = {
  name: string;
};

const SkillTitle = ({ name }: Props) => {
  return (
    <div>
      <h3 className="text-gray-400">{name}</h3>
      <div className="my-2 border-2 border-dashed border-transparent border-t-gray-600" />
    </div>
  );
};

export default SkillTitle;
