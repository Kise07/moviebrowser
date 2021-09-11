import Hero from "./Hero";

// TMDB API KEY = b94fee07cfd9ff6aa88fffe47b128a64

const SearchView = ({ keyword,searchResult }) => {
  const title = `You are searching for ${keyword}`

  return (
    <>
      <Hero text={title} />
      
    </>
  );
};

export default SearchView;
