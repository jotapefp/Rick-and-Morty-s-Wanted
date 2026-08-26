import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import classes from "./App.module.css";

import logo from "./img/rick-and-morty-logo.png";

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <h1>
        <img src={logo} alt="Rick and Morty Logo" />
      </h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
