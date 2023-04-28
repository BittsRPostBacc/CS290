'use strict';
// {
//     // deepEqual function work
//     /**
//      *
//      * @param val1
//      * @param val2
//      * @returns Boolean
//      */
//     function deepEqual(val1, val2) {
//         let val1Type = typeof (val1);
//         let val2Type = typeof (val2);
//         let overall = true;
//         let stored_overall;
//
//         if (val1 === val2) {
//             return overall;
//         } else if (typeof val1 !== typeof val2) {
//             return false;
//         } else {
//             if (val1Type === "object" || val2Type === "object") {
//                 if (val1 === null || val2 === null) {
//                     return val1 === val2;
//                 } else if (val1.length !== val2.length) {
//                     return false
//                 } else if (val1[0] !== undefined && val2[0] !== undefined) {
//                     for (let i = 0; i < val1.length; i++) {
//                         if (val1[i] !== val2[i]) {
//                             if (typeof val1[i] === "object" && typeof val2[i] === "object") {
//                                 for (let j = 0; j < val1[i].length; j++) {
//                                     if (val1[i][j] !== val2[i][j]) {
//                                         return false;
//                                     }
//                                 }
//                             } else {
//                                 return false
//                             }
//                         }
//                     }
//                 } else {
//                     let firstSet = getValues(val1);
//                     let secondSet = getValues(val2);
//                     for (let i = 0; i < firstSet.length; i++) {
//                         if (typeof firstSet[i] !== typeof secondSet[i]) {
//                             return false
//                         } else if (firstSet[i] === secondSet[i]) {
//                             overall = true;
//                         } else {
//                             return false
//                         }
//                     }
//                 }
//             } else {
//                 return val1 === val2;
//             }
//         }
//         return overall;
//     }
//
//     function getValues(valueToCheck) {
//         let values = [];
//         let concatValue = "";
//         for (const key in valueToCheck) {
//             if (valueToCheck.hasOwnProperty(key) && typeof valueToCheck[key] !== "object") {
//                 if (valueToCheck[key] !== undefined) {
//                     values.push(valueToCheck[key]);
//                     concatValue = concatValue.concat(valueToCheck[key])
//                 }
//             } else {
//                 for (const secondaryKey in valueToCheck[key]) {
//                     //console.log(`${valueToCheck[key]}: ${valueToCheck[key][secondaryKey]}`);
//                     if (valueToCheck[key][secondaryKey] !== undefined) {
//                         values.push(valueToCheck[key][secondaryKey]);
//                         concatValue = concatValue.concat(", ", valueToCheck[key][secondaryKey]);
//                     }
//                 }
//             }
//         }
//         return values.sort();
//     }
//
//     // // console.log(deepEqual(23,23))
//     // console.log(deepEqual(null,null));
//     // console.log(deepEqual(true, false));
//     //
//     const student1 = {name: 'Harvey', age: 23};
//     const student2 = {name: 'Harvey', age: 23};
//     const student3 = {age: 23, name: 'Harvey'};
//     const student4 = {name: 'Harvey'};
//     const student5 = {name: 'Harvey', age: 23, major: 'CS'};
//     const student6 = {name: 'Harvey', age: '23'};
//     const student7 = {name: 'Harvey', age: 24};
//     //
//     // console.log(deepEqual(student1, student1)); // True
//     // console.log(deepEqual(student1, student2)); // True
//     // console.log(deepEqual(student1, student3)); // True
//     // console.log(deepEqual(student1, student4)); // False
//     // console.log(deepEqual(student1, student5)); // False
//     // console.log(deepEqual(student1, student6)); // False
//     // console.log(deepEqual(student1, student7)); // False
//     //
//     const majors1 = ['CS', 'Math'];
//     const majors2 = ['CS', 'Math'];
//     const majors3 = ['CS', 'Biology'];
//     const majors4 = ['Math', 'CS'];
//     //
//     // console.log(deepEqual(majors1, majors2)); // True
//     console.log(deepEqual(majors1, majors3)); // 19 - False
//     console.log(deepEqual(majors1, majors4)); // 20 - True
//
//     // const nestedObj1 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'Austin' } };
//     // const nestedObj2 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'Austin' } };
//     // const nestedObj3 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'New Orlens' } };
//     // const nestedObj4 = { address: { number: 23, street: 'Prospect Road', city: 'Austin' }, name: 'Harvey' };
//     //
//     // console.log(deepEqual(nestedObj1, nestedObj2));  //21  True - failed
//     // console.log(deepEqual(nestedObj1, nestedObj3));  //22  False - passed
//     // console.log(deepEqual(nestedObj1, nestedObj4));  //23  True - failed
//
//     const arr1 = [1, 2, [3, 4]];
//     // const arr2 = [1, 2, [3, 4]];
//     const arr3 = [1, 2, [4, 3]];
//     //
//     // console.log(deepEqual(arr1, arr2));  //24 - True failed
//     console.log(deepEqual(arr1, arr3)); //25 - False
//     // console.log(deepEqual([1,2,3],{0:1,1:2,2:3}));   //28 false - failed
//
//
// }

{
    // Reducer function work
    // function reducer1(previousValue, currentValue) {
    //     //  Write your code here
    //     if (typeof previousValue === "number" && typeof currentValue === "number") {
    //         return previousValue + currentValue;
    //     } else {
    //         if (typeof previousValue === "string" && typeof currentValue === "number") {
    //             return currentValue;
    //         } else  if (typeof previousValue === "number" && typeof currentValue !== "number"){
    //             return previousValue;
    //         } else {
    //             return 0;
    //         }
    //     }
    // };

    /**
     * See assignment description for the requirements
     */
    // function reducer2(previousValue, currentValue) {
    //     //  Write your code here
    //     if (typeof previousValue !== "number" || typeof currentValue !== "number") {
    //         throw new TypeError("You have entered an invalid data type: TypeError");
    //     } else {
    //         return previousValue + currentValue
    //     }
    // };
    //
    // // declarations
    // let array1 = [1, 2, 3];
    // let array2 = [1, 2, true, 'a', 4, true];
    // let array3 = ['a', 1, 2, 3];
    // let array4 = ['a', 'b'];
    //
    // // reducer1 tests
    // console.log(array1.reduce(reducer1)); //.toBe(6)
    // console.log(array2.reduce(reducer1)); //[1, 2, true, 'a', 4, true].reduce(reducers.reducer1)).toBe(7)
    // console.log(array3.reduce(reducer1)); //toBe(6)
    // console.log(array4.reduce(reducer1)); //['a', 'b'].reduce(reducers.reducer1)).toBe(0)
    // // reducer2 tests
    // console.log(array1.reduce(reducer2)); //[1, 2, 3].reduce(reducers.reducer2)).toBe(6)
    // console.log(array2.reduce(reducer2)); //[1, 2, true, 'a', 4, true].reduce(reducers.reducer2) }).toThrow(TypeError)
    // console.log(array3.reduce(reducer2)); //['a', 1, 2, 3].reduce(reducers.reducer2) }).toThrow(TypeError)
}

// Quiz 2
{
    /**
     * Write a function factorial(n) that uses recursion to compute the factorial of its argument.
     * You can assume that the value of n is non-negative.
     */
    function recursiveFactorial(numToFactor, total = 0, counter = 1) {
        if (numToFactor < 0){
            throw new RangeError("You cannot factor a negative number")
        } else {
            while (counter < numToFactor) {
                total += numToFactor * counter;
                counter++;
                recursiveFactorial(numToFactor, total, counter);
            }
        }
        return total;
    }

    console.log(recursiveFactorial(0));
}
