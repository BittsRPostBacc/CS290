import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.
/* Add your code here */

// variable declarations
let httpRequestCounter = 0


// function definitions
const requestCounter = function (req, res, next) {
    if (req.path == '/') {
        httpRequestCounter++;
        res.json(req.path);
        if (httpRequestCounter % 10 == 0) {
            console.log(`There have been ${httpRequestCounter} HTTP requests`)
        }
    }
}

app.get('/randomPerson', async(req, res) => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        res.json({
            data:data,
            message:"Random user successfully found"
        })
    } catch(err) {
        res.json ( {
            message:err.message,
        })
    }
})

app.use(requestCounter);

export const fetchJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  }



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
}); 



