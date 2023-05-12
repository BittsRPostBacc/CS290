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

export default function requestCounter() {
    httpRequestCounter++;
    if (httpRequestCounter % 10 === 0) {
        console.log(`There have been ${httpRequestCounter} random person requests`);
    }
}
app.get('/randomPerson',( req, res, next) => {
    requestCounter();
    next();
});
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


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
}); 



