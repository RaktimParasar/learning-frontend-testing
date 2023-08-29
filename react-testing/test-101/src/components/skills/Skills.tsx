import { useState } from "react";

import { SkillsProps } from "./Skills.types";

export const Skills = ({ skills }: SkillsProps) => {
  const [islogin, setIslogin] = useState<Boolean>(false);
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div>
        {islogin ? <button>Start Learning</button> : <button onClick={() => setIslogin(true)}>Login</button>}
      </div>
    </>
  );
};
