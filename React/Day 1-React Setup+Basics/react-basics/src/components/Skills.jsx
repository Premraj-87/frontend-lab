const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
