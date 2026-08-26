import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default Navbar;
