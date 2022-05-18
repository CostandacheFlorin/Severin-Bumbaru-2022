import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import Internship from "./components/Internship/Internship/Internship";
import InternshipRequests from "./pages/new-internship-requests/InternshipRequests";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <MainNavigation />

      <Switch>
        <Route path="/stagii" exact>
          <InternshipRequests />
        </Route>

        <Route path="/autentificare" exact>
          <Login />
        </Route>

        <Route path="/inregistrare" exact>
          <Register />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
