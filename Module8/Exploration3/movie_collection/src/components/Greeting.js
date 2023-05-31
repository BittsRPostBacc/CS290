import React from 'react';

/**
 * First function call is "regular", second is deconstructed and is the "standard" for REACT
 * @param name
 * @param time
 * @returns {JSX.Element}
 * @constructor
 */
//function Greeting(props) {
function Greeting({name, time}) {
    return(
    <div>
        <p>
            {/*Hello {props.name}!!!!!*/}
            Hello there {name}, hope you are well
        </p>
        <p>
            {/*The current time is {props.time} and you definitely need to be working on school*/}
            It is currently {time} and you should be studying!
        </p>
    </div>
    );
}

export default Greeting;