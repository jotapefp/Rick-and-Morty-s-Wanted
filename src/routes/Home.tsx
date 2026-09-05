import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h2>About Rick and Morty</h2>
      <p>
        Rick and Morty is an adult-oriented animated sci-fi comedy series
        created in 2013 by Justin Roiland and Dan Harmon. The plot follows the
        adventures of Rick Sanchez, a brilliant alcoholic scientist, and his
        anxious grandson Morty Smith, who travel across various parallel
        realities and other planets in Rick's spaceship—a flying saucer.
      </p>

      <h2>About the project</h2>
      <p>
        This project is a simple React application that consumes the Rick and Morty API to display information about characters and episodes.
      </p>
    </div>
  );
};

export default Home;
