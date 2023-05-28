//import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'
function App() {
    const name = 'Randy';
  return (
    <div className="App">
      <header className="App-header">
          <Greeting name={name} time={Date()}/>
      </header>
    </div>
  );
}

export default App;
