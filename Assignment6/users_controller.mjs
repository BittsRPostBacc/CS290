import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './users_model.mjs';

const app = express();

const PORT = process.env.PORT;

/**
 * Route Handler to create Records in MongoDB
 */
app.get("/create", asyncHandler(async (req, res) => {
    const user = await users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber);
    res.send(user)
}))

/**
 * Route Handler to retrieve records from MongoDB
 */
app.get('/retrieve', asyncHandler(async (req, res) => {
    let filter = {};
    if(req.query !== undefined){
        filter = req.query
    }
    const result = await users.searchUser(filter);
    res.send(result);
}))

/**
 * Route Handler to update records in MongoDB
 */
app.get("/update", asyncHandler(async  (req, res) => {
    let update = {};
    let userID = {_id: req.query._id}
    let validUser = await users.searchUser(userID);
    if (validUser.length > 0) {
        if (req.query) {
            const values = Object.keys(req.query);
            values.forEach((value) => {
                if (value !== "_id") {
                    update[value] = req.query[value]
                }
            })
        }
        try {
            const resultVal = await users.updateUser({_id: req.query._id}, update);
            res.send({updateCount: resultVal});
        } catch (err) {
            res.send({Error : "Not found"})
        }
    } else {
        res.send({Error : "Not found"})
    }
}))

/**
 * Route Handler deletes a record from MongoDB if it exists
 */
app.get("/delete", asyncHandler(async (req, res) => {
    let matchingRecords = {};
    let filter = req.query;
    matchingRecords = await users.searchUser(filter);
    if (matchingRecords.length > 0) {
        const deleteResult = await users.deleteRecord(filter);
        res.send({deletedCount: deleteResult});
    } else {
        res.send({Error: "No Records Found"})
    }

}))

/**
 * Start the listener and report it to the console
 */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});