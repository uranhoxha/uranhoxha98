import Window from "../Window/window";
import folder_logo from "../../assets/folder_small.png";
import "./projectsWindow.scss";

import maskedInMetal from "../../assets/projectImages/masked_in_metal.png";
import pawfectPals from "../../assets/projectImages/pawfect_pals.png";
import doit from "../../assets/projectImages/doit.png";
import cryptto from "../../assets/projectImages/cryptto.png";
import modelkos from "../../assets/projectImages/modelkos.png";

import reactLogo from "../../assets/projectImages/react.png";
import htmlLogo from "../../assets/projectImages/html.png";
import cssLogo from "../../assets/projectImages/css.png";
import JSLogo from "../../assets/projectImages/javascript.png";
import scssLogo from "../../assets/projectImages/scss.png";
import figmaLogo from "../../assets/projectImages/figma.png";

function ProjectsWindow({ onClose }) {
  // Array of project data
  const projects = [
    {
      image: pawfectPals,
      title: "Pawfect Pals",
      description:
        "Designed in Figma when I was learning how to use it. Adoption Center website for a made-up company.",
      logos: [reactLogo, cssLogo, figmaLogo],
      madeBy:"Designed by Me"
    },
    {
      image: maskedInMetal,
      title: "Masked In Metal",
      description:
        "An e-commerce to showcase my design and design-to-code skills for one of my favorite artists.",
      logos: [reactLogo, cssLogo, figmaLogo],
      madeBy:"Designed by Me"
    },
    {
      image: doit,
      title: "Do It",
      description: "Project I submitted for my first ever bootcamp on my first year of college. A simple to-do app with many bugs and design flaws :D.",
      logos: [htmlLogo,cssLogo, JSLogo, figmaLogo],
      madeBy:"Designed by Me"
    },
    {
      image: cryptto,
      title: "Cryptto",
      description: "First project on my summer internshipship at KosovaOutsource LLC. Cryptocurrency price tracker.",
      logos: [reactLogo, scssLogo],
      madeBy:"Designed by KosovaOutsource LLC"
    },
    {
      image: modelkos,
      title: "ModelKos",
      description: "Second and final project again on my internship. Model agency website for Modelkos",
      logos: [reactLogo, scssLogo],
      madeBy:"Designed by KosovaOutsource LLC"
    },
  ];

  return (
    <Window title="My Projects" iconSrc={folder_logo} onClose={onClose}>
      <h2>------------------------------------</h2>
      <h2>My Projects</h2>
      <h2>------------------------------------</h2>
      {projects.map((project, index) => (
        <div className="project-content" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-logo">
              {project.logos.map((logo, i) => (
                <img src={logo} alt="tech logo" className="tech-logo" key={i} />
              ))}
            </div>
            <p>{project.madeBy}</p>
          </div>
        </div>
      ))}
    </Window>
  );
}

export default ProjectsWindow;
