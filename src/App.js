import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import Internship from "./components/Internship/Internship/Internship";

const skills = [{ skill: "java" }, { skill: "oop" }, { skill: "ceva" }];

function App() {
  return (
    <>
      <MainNavigation />
      <Internship
        description={"testststsetsetests"}
        startingDate="23 decembrie"
        spots={40}
        type="remote"
        location="bucuresti"
        skills={skills}
        company="companie"
        title="Firma"
      />

      <Footer />
    </>
  );
}

export default App;
