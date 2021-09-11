import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const[searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b94fee07cfd9ff6aa88fffe47b128a64&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(Response => Response.json())
    .then(data => {
      setSearchResults(data.results)
     })
    }
  }, [searchText])


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
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
        {/* This is #2 way of linking */}
      </Switch>
    </div>
  );
}

export default App;
