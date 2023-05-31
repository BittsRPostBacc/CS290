import React from "react";
// import movies from "../data/movies";  Can also import this way rather than sending through function call
import MovieItem from "./MovieItem";
import '../App.css';

function MovieCollection ({movies}) {
    console.log(movies)
    // Below function uses the for loop to pass the elements to the page
   /* console.log(`Movies.length = ${movies.length}`)
    function getMovieItems() {
        let elements = [];
        for(let i = 0; i < movies.length; i++) {
            elements.push(<MovieItem movie={movies[i]} key={i} />);
        }
        return elements;
        // {movies.map( movie => <MovieItem/>)}
    }*/
    return (
        // <h1>I will eventually be a collection of movies</h1>
        <div className="collection-container">
            {movies.map((movie, i) => <MovieItem movie={movie} key={i} />)}
        </div>
        // <div>   // This uses the function above to get the elements for the page
        //     {getMovieItems()}
        // </div>
    );
}

export default MovieCollection;