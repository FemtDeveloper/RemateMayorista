import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./components/inicio";
import Hombres from "./components/hombres";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Switch>
        <Route path="/hombres">
          <Hombres />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
