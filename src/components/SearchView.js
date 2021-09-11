import Hero from "./Hero";

// TMDB API KEY = b94fee07cfd9ff6aa88fffe47b128a64

const SearchView = ({ keyword,searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultsHTML = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>
  })

  return (
    <>
      <Hero text={title} />
      {resultsHTML}
    </>
  );
};

export default SearchView;
