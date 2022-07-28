import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        colour={showAdd ? `crimson` : `green`}
        text={showAdd ? `Close` : `Add`}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color: '#333',
//     fontSize: '1rem',
// }

export default Header;
