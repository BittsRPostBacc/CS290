'use strict';

const express = require('express');
const app = express();
const PORT = 3585;

app.use(express.static('public'));  //Common convention says use "public" here

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});

