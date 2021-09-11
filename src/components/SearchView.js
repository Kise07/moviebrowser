import Hero from "./Hero";

// TMDB API KEY = b94fee07cfd9ff6aa88fffe47b128a64
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=b94fee07cfd9ff6aa88fffe47b128a64&language=en-US&query=arya&page=1&include_adult=false


const SearchView = ({ keyword,searchReaults }) => {
  const title = `You are searching for ${keyword}`
  console.log(searchReaults, "are the search results")
  return (
    <>
      <Hero text={title} />
      
    </>
  );
};

export default SearchView;
