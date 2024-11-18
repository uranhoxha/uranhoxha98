import Window from "../../Window/window";
import folder_logo from "../../../assets/folder_small.png";
import "./projectsWindow.scss";

import maskedInMetal from "../../../assets/projectImages/masked_in_metal.png";
import pawfectPals from "../../../assets/projectImages/pawfect_pals.png";
import doit from "../../../assets/projectImages/doit.png";
import uranhoxha98 from "../../../assets/projectImages/uranhoxha98.png";
import gpt3 from "../../../assets/projectImages/gpt3.png";

import reactLogo from "../../../assets/projectImages/react.png";
import htmlLogo from "../../../assets/projectImages/html.png";
import cssLogo from "../../../assets/projectImages/css.png";
import JSLogo from "../../../assets/projectImages/javascript.png";
import scssLogo from "../../../assets/projectImages/scss.png";
import figmaLogo from "../../../assets/projectImages/figma.png";
import { MdOpenInNew } from "react-icons/md";

function ProjectsWindow({ onClose }) {
  const projects = [
    {
      image: gpt3,
      title: "GPT3",
      description:
        "First ever website I coded with React with the help of a YouTube video.",
      logos: [reactLogo, cssLogo],
      madeBy: "Designed by Me",
      link: "https://gpt3-website-urani.netlify.app/",
      githubLink: "https://github.com/uranhoxha/GPT3-Website",
      target: "_blank",
    },
    {
      image: pawfectPals,
      title: "Pawfect Pals",
      description:
        "Designed in Figma when I was learning how to use it. Adoption Center website for a made-up company.",
      logos: [reactLogo, cssLogo, figmaLogo],
      madeBy: "Designed by Me",
      link: "https://pawfect-pals.netlify.app/",
      githubLink: "https://github.com/uranhoxha/petshop",
      target: "_blank",
    },
    {
      image: maskedInMetal,
      title: "Masked In Metal",
      description:
        "An e-commerce to showcase my design and design-to-code skills for one of my favorite artists.",
      logos: [reactLogo, cssLogo, figmaLogo],
      madeBy: "Designed by Me",
      link: "https://masked-in-metal.netlify.app/",
      githubLink: "https://github.com/uranhoxha/mfdoom-shop",
      target: "_blank",
    },
    {
      image: doit,
      title: "Do It",
      description:
        "Project I submitted for my first ever bootcamp on my first year of college. A simple to-do app with many bugs and design flaws :D.",
      logos: [htmlLogo, cssLogo, JSLogo, figmaLogo],
      madeBy: "Designed by Me",
      link: "https://doit-task-managment.netlify.app/",
      githubLink: "https://github.com/uranhoxha/doit",
      target: "_blank",
    },
    {
      image: uranhoxha98,
      title: "uranhoxha98",
      description: "My current portfolio. The website you are currently on.",
      logos: [reactLogo, scssLogo],
      madeBy: "Designed by Me",
      link: "#",
      githubLink: "https://github.com/uranhoxha/uranhoxha98",
      target: "_self",
    },
  ];

  return (
    <Window title="My Projects" iconSrc={folder_logo} onClose={onClose}>
      <h2>------------------------------------</h2>
      <h2>My Projects</h2>
      <h2>------------------------------------</h2>
      {projects.map((project, index) => (
        <a
          href={project.link}
          target={project.target}
          rel="noreferrer"
          key={index}
        >
          <div className="project-content">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-description">
              <MdOpenInNew />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-logo">
                {project.logos.map((logo, i) => (
                  <img
                    src={logo}
                    alt="tech logo"
                    className="tech-logo"
                    key={i}
                  />
                ))}
              </div>
              <div className="project-footer">
                <p>{project.madeBy}</p>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  Github link
                </a>
              </div>
            </div>
          </div>
        </a>
      ))}
    </Window>
  );
}

export default ProjectsWindow;
