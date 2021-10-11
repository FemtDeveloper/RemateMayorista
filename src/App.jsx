import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./components/inicio";
import Hombres from "./components/hombres";
import Banner from "./components/Banner/Banner";
import UploadImages from "./components/upload/UploadImages";
import Mujeres from "./components/mujeres";
import Niños from "./components/niños/Niños";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Switch>
        <Route path="/upload">
          <UploadImages />
        </Route>
        <Route path="/hombres">
          <Hombres />
        </Route>
        <Route path="/mujeres">
          <Mujeres />
        </Route>
        <Route path="/niños">
          <Niños />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
