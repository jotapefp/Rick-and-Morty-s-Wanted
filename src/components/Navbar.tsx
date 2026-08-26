import { Link } from "react-router-dom";
import { useCharacterContext } from "../context/CharacterContext";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { resetSearch } = useCharacterContext();

  return (
    <div className={classes.navbar}>
      <h2>
        <Link to="/" onClick={resetSearch}>
          Home
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
