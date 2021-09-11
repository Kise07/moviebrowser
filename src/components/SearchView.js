import Hero from "./Hero";

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
