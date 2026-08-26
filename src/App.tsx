import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CharacterProvider } from "./context/CharacterContext";

import classes from "./App.module.css";
import logo from "./img/rick-and-morty-logo.png";

function App() {
  return (
    <CharacterProvider>
      <div className={classes.app}>
        <Navbar />
        <h1>
          <img src={logo} alt="Rick and Morty Logo" />
        </h1>
        <Outlet />
        <Footer />
      </div>
    </CharacterProvider>
  );
}

export default App;