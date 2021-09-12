import Hero from "./Hero";
import { useParams } from "react-router";

const MovieView = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <Hero text="Movie deatail view" />
      
    </>
  );
};

export default MovieView;
