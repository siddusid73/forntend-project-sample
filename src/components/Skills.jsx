import React from 'react';

const skillCategories = [
  {
    title: "Core Web Skills",
    skills: [
      { name: "HTML5", img: "/assets/html.png" },
      { name: "CSS3", img: "/assets/css.png" },
      { name: "JavaScript (ES6+)", img: "/assets/javascript.png" },
    ],
  },
  {
    title: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React", img: "/assets/react.png" },
      { name: "Bootstrap", img: "/assets/bootstrap.png" },
      { name: "Tailwind CSS", img: "/assets/tailwind.png" },
    ],
  },
  {
    title: "Build Tools & Version Control",
    skills: [
      { name: "Git", img: "/assets/git.png" },
      { name: "GitHub", img: "/assets/github.png" }
    ],
  },
  {
    title: "UI/UX & Design Tools",
    skills: [
      { name: "Figma", img: "/assets/figma.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Skills & Technologies</h2>
        <p className="text-muted text-center mb-5">
          My frontend development toolkit.
        </p>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-5">
            <h4 className="mb-4">{category.title}</h4>
            <div className="row g-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="col-6 col-md-3 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                >
                  <div
                    className="p-3 border rounded shadow-sm skill-card"
                    tabIndex="0"  
                    aria-label={skill.name}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="img-fluid mb-2 skill-icon"
                      style={{ maxHeight: 60 }}
                    />
                    <h6 className="mb-0">{skill.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
