import "./resumeWindow.scss";
import Window from "../../Window/window";
import paperIcon from "../../../assets/paper_small.png";
import Resume from "../../Resume/resume";
import resumePDF from "../../Resume/Uran_Hoxha_CV.pdf";

function ResumeWindow({ onClose }) {
  return (
    <Window title="Resume" iconSrc={paperIcon} onClose={onClose}>
      <Resume />
      <a href={resumePDF} download="Uran_Hoxha_CV.pdf" style={{textDecoration: "underline", fontSize:"24px"}}>
        Download Resume
      </a>
    </Window>
  );
}

export default ResumeWindow;
