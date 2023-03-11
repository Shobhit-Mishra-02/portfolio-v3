import "../styles/ContactSection.css";
import { CiMail } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { ExpandOnLoading } from "./LoadingAnimation";

export default () => {
  return (
    <div className="contact_section container-margin">
      <ExpandOnLoading>
        <div className="contact_section__heading">
          <span>📬 Contact</span>
          <h2>Contact me</h2>
        </div>
        <div className="contact_section__button">
          <button>
            <CiMail />
            Mail me!!
          </button>
          <div className="contact_section__email">
            <MdContentCopy />
            <span>ramdom@gamil.com</span>
          </div>
        </div>
      </ExpandOnLoading>
    </div>
  );
};
