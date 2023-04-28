'use strict';

const PORT = 3000;

const express = require('express');
const app = express();

app.use(express.static('public'));

// function handleGetForReview(req,res){
//     res.send("Hi from handleGetForReview");
// }
//
// app.get("/review", handleGetForReview);

// const handleGetForReview = (reg, res) => {
//     res.send("Hi from handleGetForReview");
// }
// The above is how this gets built out
// app.get("/review", (reg, res) => {
//     console.log(reg.query)
//     res.send(`Hi ${req.query.name}, your email is ${req.query.email}`);
// })

app.use(express.urlencoded({
    extended: true
}));

app.get("/review", (req, res) => {
    console.log(req.query)
    res.send(`Hi ${req.query.name}. Your email address is ${req.query.email}`)
})

app.post("/review", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});