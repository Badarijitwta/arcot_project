import "./focuswrapper.css";
import FocusImage from "./../Image/index";
import FocusText from "../FocusText";

function FocusWrapper() {
  return (
    <div className="focus-wrapper">
      <FocusText />
      <FocusImage />
    </div>
  );
}

export default FocusWrapper;
