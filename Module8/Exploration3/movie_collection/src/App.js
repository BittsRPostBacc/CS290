//import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
//import MovieItem from "./components/MovieItem";
import MovieCollection from './components/MovieCollection';
import movies from './data/movies';

function App() {
    const name = 'Randy';
  return (
    <div className="App">
      <header className="App-header">
          <Greeting name={name} time={Date()}></Greeting>
          <MovieCollection movies={movies}></MovieCollection>
      </header>
    </div>
  );
}

export default App;
