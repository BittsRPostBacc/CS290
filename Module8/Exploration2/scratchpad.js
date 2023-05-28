/**
 * Object Destructuring
 *
 * Consider an object book with two properties title and price. We can assign the value of these two properties to
 * 2 variables title and price with two assignment statements as follows:
 */

const book = { title : "Modern JavaScript", price: 21.99};
const title = book.title; // Value of title is set to "Modern JavaScript"
const price = book.price; // Value of price is set to 21.99

/**
 * However, object destructuring expressions allow us to assign the members of an object to multiple variables in
 * just one expression.
 *
 * Declaring Variables and Assigning Values from an Object in One Expression
 *
 * We can declare the variables and assign them values in the same destructuring expression. Here is an example of this:
 *
 */

const book = { title : "Modern JavaScript", price: 21.99};
const {title, price } = book; // This sets value of title to "Modern JavaScript" and price to 21.99

/**
 * In the expression, const {title, price } = book;, we declare two variables title and price, and also assign them
 * the values of the corresponding properties of the object book. Note that this requires that the names of the
 * variables must be the same the names of the properties of the object that we want to destructure.
 * JavaScript provides a different syntax that allows the names of the variables to be different from the properties
 * in the object we want to destructure. But we will not be using that in the course. You can find more details
 * about this in the textbook or at the MDN page on destructuring assignments Links to an external site..
 *
 * Array Destructuring
 *
 * Consider an array vals  with 3 elements. We can assign the values of each of the 3 elements in this array
 * to the 3 variables a, b and c using 3 assignment statements as follows:
 */

const vals = [87, 42, 53];
const a = vals[0]; // Value of a is set to 87
const b = vals[1]; // Value of b is set to 42
const c = vals[2]; // Value of c is set to 53

/**
 * However, array destructuring expressions allows us to use one expression to assign the value of multiple elements
 * in an array to multiple variables.
 *
 * Declaring Variables and Assigning Values from an Array in One Expression
 *
 * We can declare the variables and assign them values in the same destructuring expression. Here is an example of this
 * where we assign the value of the element at index 0 in the array vals to the variable a,
 * the element at index 1 to the variable b and the element at index 2 to the variable c.
 */

const vals = [87, 42, 53];
const [a, b, c] = vals; // Value of a is set to 87, b to 42 and c to 53

/**
 * In the expression, const [a, b, c] = vals;, we declare three variables a, b and c  and also assign them the values
 * of the elements at index 0, 1 and 2 in the array vals.
 *
 * JSX
 *
 * JSX is a combination of JavaScript and XML. XML is a markup language which looks similar to HTML.
 * We do not need to understand the details of XML to understand and write code in JSX. JSX allows us to define new
 * components, which we can then use as tags along with existing HTML tags. One difference with HTML is that in
 * JSX every tag must be closed, whereas HTML allows certain tags to omit the closing tag. Furthermore,
 * we can embed JavaScript expressions in JSX, and use these to pass JavaScript values to components.
 * The JavaScript expressions we can use in JSX include primitives, arrays, objects, and functions.
 * Other than string literals, all other types of expressions need to be surrounded by {} in JSX.
 *
 * Example: Hello World
 *
 * In the following example, we have modified the default App component created by create-react-app to print a "Hello World" message along with the current time.
 */

import './App.css';

function App() {
    const name = "Nauman";
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hello {name}!
                </p>
                <p>
                    The current time is {Date()}
                </p>
            </header>
        </div>
    );
}

export default App;

/**
 * Goal of the module is to show the use of mixing JavaScript inside HTML, aka JSX
 * See the App.js and Greeting.js files for example of this
 * Example of the component tree, App is the parent, Greeting is the child
 */
