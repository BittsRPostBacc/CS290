// Randy Bitts
// bittsr@oregonstate.edu

"use strict";

// Set Constants for the style sheet names
const styleSheetA = "styleA.css"
const styleSheetB = "styleB.css"

// Create the registerHandler functionality
function registerHandlers() {
    // Create the 2 click event handlers to switch between the two styleSheet pages
    function styleAClick(event) {
        event.preventDefault()  // Prevent the submit functionality of the submit button
        // if the currently loaded styleSheet is the other one, setAttribute to the button StyleSheet
        if (document.getElementById("styleSheet").getAttribute("href") === "styleB.css") {
            document.getElementById("styleSheet").setAttribute("href", styleSheetA)
        }
    }

    function styleBClick(event) {  // Comments for this function are identical to the one above
        event.preventDefault()
        if (document.getElementById("styleSheet").getAttribute("href") === "styleA.css") {
            document.getElementById("styleSheet").setAttribute("href", styleSheetB)
        }
    }

    // Event listener declarations for each of the two buttons
    document.getElementById("styleA").addEventListener("click", styleAClick);
    document.getElementById("styleB").addEventListener("click", styleBClick);
}

document.addEventListener("DOMContentLoaded", registerHandlers);