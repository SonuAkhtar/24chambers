import { Link } from "react-router-dom";

// import CSS
import "./linkButton.css";

const LinkButton = ({ link, text, icon, color = "" }) => {
  return (
    <div className={`linkButton ${color}`}>
      <Link to={link}>
        {text} <i className={icon ? icon : "fa-solid fa-arrow-right"} />
      </Link>
    </div>
  );
};

export default LinkButton;
