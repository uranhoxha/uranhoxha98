import "./resumeWindow.scss";
import Window from "../../Window/window";
import paperIcon from "../../../assets/paper_small.png";
import resumePDF from "../../Resume/Uran_Hoxha_Resume.pdf";


function ResumeWindow({ onClose }) {
  return (
    <Window title="Resume" iconSrc={paperIcon} onClose={onClose}>
      <div className="resume-content">
        <iframe
          src="https://drive.google.com/file/d/1ZLy02YCu3JZwR-j-XwmZ1hFSSoQwpRWI/preview"
          title="Resume"
          height="480"
          allow="autoplay"
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
