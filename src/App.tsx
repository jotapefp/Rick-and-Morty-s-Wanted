import { Outlet } from "react-router-dom";

import classes from "./App.module.css";

import logo from "./img/rick-and-morty-logo.png";

function App() {
  return (
    <div className={classes.app}>
      
      <h1>
        <img src={logo} alt="Rick and Morty Logo" />
      </h1>

      <Outlet />
    </div>
  );
}

export default App;
