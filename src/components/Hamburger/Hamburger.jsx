// import css
import "./hamburger.css";

const Hamburger = ({ burgerClick, setBurgerClick }) => {
  return (
    <div
      className={`hamburger_wrapper ${burgerClick && "active"}`}
      onClick={() => setBurgerClick(!burgerClick)}
    >
      <div className="ham_icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
