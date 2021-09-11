import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 210" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              minus consequuntur commodi est sapiente quidem quam, deserunt
              obcaecati hic nam nisi ex. Impedit provident similique nisi iste
              perspiciatis labore quod?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
