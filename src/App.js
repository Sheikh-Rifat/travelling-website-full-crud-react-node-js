import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/Header/MenuHeader/MenuHeader";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Private/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuHeader />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
