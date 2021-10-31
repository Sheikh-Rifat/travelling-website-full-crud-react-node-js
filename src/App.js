import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/Header/MenuHeader/MenuHeader";
import Home from "./components/Home/Home";
import LogIn from "./components/Login/Login/LogIn";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AllServices from "./components/Main/Services/AllServices";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Private/ServiceDetails/ServiceDetails";
import AuthProvider from "./Context/AuthProvider";
import UserBookings from "./components/Private/UserBookings/UserBookings";
import ManageBookings from "./components/Private/ManageBookings/ManageBookings";
import Host from "./components/Private/Host/Host";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MenuHeader />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/allServices">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/userBookings">
              <UserBookings></UserBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/host">
              <Host></Host>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
