import Image from 'next/image';
import React from 'react'

const SkillsPortfolio = () => {
    const skills = [
      {
        name: "HTML5",
        icon: "/assets/icons/technologies/html5.png",
        width: 35,
        height: 40,
      },
      {
        name: "CSS3",
        icon: "/assets/icons/technologies/css3.png",
        width: 35,
        height: 40,
      },
      {
        name: "JavaScript",
        icon: "/assets/icons/technologies/js.svg",
        width: 41.125,
        height: 41.125,
      },
      {
        name: "React JS",
        icon: "/assets/icons/technologies/reactjs.png",
        width: 42.00004577636719,
        height: 44.39130783081055,
      },
      {
        name: "Figma",
        icon: "/assets/icons/technologies/figma.svg",
        width: 41,
        height: 40,
      },
      {
        name: "Illustrator",
        icon: "/assets/icons/technologies/ai.png",
        width: 44.153846740722656,
        height: 42.077579498291016,
      },
      {
        name: "Fire Base",
        icon: "/assets/icons/technologies/firebase.png",
        width: 30,
        height: 40,
      },
      {
        name: "Adobe XD",
        icon: "/assets/icons/technologies/xd.png",
        width: 42,
        height: 40.02501678466797,
      },
      {
        name: "Postman",
        icon: "/assets/icons/technologies/postman.svg",
        width: 40,
        height: 40,
      },
      {
        name: "VS Code",
        icon: "/assets/icons/technologies/vscode.png",
        width: 40,
        height: 40,
      },
      {
        name: "Photoshop",
        icon: "/assets/icons/technologies/ps.png",
        width: 39,
        height: 40,
      },
    ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mt-20">Skills</h1>
      <p className="text-[22px] mt-10">
        Here are some of my skills on which I have been working.{" "}
      </p>
      <div className="flex flex-wrap mt-10 max-w-[1109px] gap-5 items-center justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row gap-4 rounded-[45px] py-3 px-8 border-1">
            <Image
              src={skill.icon}
              width={skill.width}
              height={skill.height}
              alt={skill.name}
            />
            <p className="text-[30px]">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPortfolio