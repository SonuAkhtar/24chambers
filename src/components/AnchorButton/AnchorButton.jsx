import "./anchorButton.css";

const AnchorButton = ({ text, id, color = "" }) => {
  return (
    <div className={`anchor_button ${color}`}>
      <a href={id}>{text}</a>
    </div>
  );
};

export default AnchorButton;
