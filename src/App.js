import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {/* This is #1 way of linking */}
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        {/* This is #2 way of linking */}
      </Switch>
    </div>
  );
}

export default App;
