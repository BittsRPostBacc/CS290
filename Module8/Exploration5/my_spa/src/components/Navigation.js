import React from 'react';
// instead of <a href>
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            {/*<a href="/">Home</a>*/}
            {/*<a href="/about">About</a>*/}
            {/*<a href="/contact">Contact</a>*/}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navigation