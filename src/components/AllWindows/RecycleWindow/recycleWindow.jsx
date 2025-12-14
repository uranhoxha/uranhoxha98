import Window from "../../Window/window";
import "./recycleWindow.scss";
import recyclBin_small from "../../../assets/recycle_bin_small.png";

function recycleWindow({ onClose }) {
  return (
    <Window title="Recycle Bin" iconSrc={recyclBin_small} onClose={onClose} className="recycle-window">
      <div>
        <h2>------------------------------------</h2>
        <h2>404s & Heartbreak</h2>
        <h2>------------------------------------</h2>
        <p>The trash is currently empty, speaking of trash cans make sure to throw the trash in the trash cans, like in the real world, seriously.</p>
      </div>
    </Window>
  );
}

export default recycleWindow;
