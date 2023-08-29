import { useEffect, useState } from "react";

import { SkillsProps } from "./Skills.types";

export const Skills = ({ skills }: SkillsProps) => {
  const [islogin, setIslogin] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => setIslogin(true), 500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div>
        {islogin ? <button>Start learning</button> : <button onClick={() => setIslogin(true)}>Login</button>}
      </div>
    </>
  );
};
