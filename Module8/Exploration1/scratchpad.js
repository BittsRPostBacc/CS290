/*
create REACT app framework - npx create-react-app <app name>
npx is a standard command for npm

 */

/**
 *
 * index.js
  * The file index.js is the entry point to the DOM tree created by our React app. When writing our own app, we typically do not make any changes to index.js. Instead, our changes start with the file App.js which is also imported by index.js. It is not critical that we understand the file index.js, but let's take a look at the essential contents of the file.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/**
 *
 * This file imports two important package that all React apps use, react and react-dom.
 * Actually, from the react-dom package, the module client is being imported. After the import statements,
 * two functions are being called:
 *
 *     From the module react-dom/client, the function ReactDOM.createRoot() is called.
 *     This function is passed one argument which is a node in the DOM tree. The React library will add the root of
 *     the DOM tree created by our React code as a child of this node.
 *     We see that this function is being passed the HTML element with id root . This element is a div element
 *     in the file index.html.
 *     This means that the React library will place the DOM tree created by our code as a child of the DOM element
 *     created for the div element with the id root.
 *     In the next line, the function render() is being called on the object returned
 *     by the call to ReactDOM.createRoot().
 *     This function is passed a React component which will be root of the component tree created by our React code.
 *     We see that this function is being passed the React component App which is defined in the file App.js.
 *     Together these two function calls mean that the React library will create a DOM tree from the React component
 *     tree with App as the root component and then place this DOM tree as a child of the DOM element with id root.
 *     Note we don't have to write any code to achieve this. The React library will process our React code starting
 *     with the file App.js and do all of this work of creating a DOM tree from the React components in our code
 *     and placing this DOM tree as a child of the DOM element with id root.
 */

/**
 * App.js
 *
 * This file defines a component. As we stated earlier, React components are JavaScript functions that return elements
 * defined using JSX. Here is the default App.js file created for us.
 */

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

