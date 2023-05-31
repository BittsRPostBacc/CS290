/**
 * Exploration — React Components for Collections
 *
 * Displaying collection of items is very common in web pages. We can display collection of items by choosing among
 * many different HTML elements, such as ordered lists, unordered lists, tables or some other HTML elements.
 * In this exploration, we study how to design and code React components to display lists of items. In practice,
 * this data may be coming from calling a REST API, which in turn could be getting the data from a database.
 * This means while coding our components, we do not know how many items are in the collection that our React app is
 * asked to display. We will see how the method map defined on the Array object is used to address this issue.
 *
 */

/**
 * The Component Tree of Our App
 *
 * We will create two new components, MovieItem that models one movie, and MovieCollection that models a collection of
 * MovieItem components. Our App component will include a MovieCollection element to display the collection of movies.
 *
 */

/**
 * JSX apps do not natively use control structures - if, for, while etc, needs to be an expression
 * We can do this with the Array.map() Method instead
 *
 * MDN example:
 */
const array1 = [1,4,9,16];
// pass a function to the map
const map1 = array1.map(x => x * 2);
console.log(map1)
console.log(typeof map1)
// Result - array: [2, 8, 18, 32]
/**
 * If we pass map 2 arguments, first argument is assigned to the data, second argument is assigned to the its index
 */
const array2 = [1, 4, 9, 16];
const map2 = array2.map((x, y) => y)
console.log(array2)
