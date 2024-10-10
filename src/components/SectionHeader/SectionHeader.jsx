// import CSS
import "./sectionHeader.css";

const SectionHeader = ({ title, subtitle, color = "dark" }) => {
  return (
    <div className="section_header">
      <h3 className={`section_header_subtitle ${color}`}>{subtitle}</h3>
      <h1 className="section_header_title">{title}</h1>
    </div>
  );
};

export default SectionHeader;
