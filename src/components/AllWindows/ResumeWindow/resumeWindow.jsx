import "./resumeWindow.scss";
import Window from "../../Window/window";
import paperIcon from "../../../assets/paper_small.png";
import Resume from "../../Resume/resume";
import resumePDF from "../../Resume/Uran_Hoxha_Resume.pdf";
import CV from "../../../assets/Resume - Uran Hoxha.png";

function ResumeWindow({ onClose }) {
  return (
    <Window title="Resume" iconSrc={paperIcon} onClose={onClose}>
      <div className="resume-content">
        <iframe
          src="https://drive.google.com/file/d/1ZLy02YCu3JZwR-j-XwmZ1hFSSoQwpRWI/preview"
          height="480"
          allow="autoplay"
          title="Uran Hoxha Resume"
        ></iframe>
        <a
          href={resumePDF}
          download="Uran_Hoxha_Resume.pdf"
          style={{ textDecoration: "underline", fontSize: "24px" }}
        >
          Download Resume
        </a>
      </div>
    </Window>
  );
}

export default ResumeWindow;
