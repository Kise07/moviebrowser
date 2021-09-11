import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [searchReaults, setSearchResults] = useState([]);
  const[searchText, setSearchText] = useState('');


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          {/* This is #1 way of linking */}
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchReaults={searchReaults}/>
        </Route>
        {/* This is #2 way of linking */}
      </Switch>
    </div>
  );
}

export default App;
