import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

// Define the Schema
const usersSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: false}
});

// Compile the model for the schema
const User = mongoose.model("User", usersSchema);

/**
 * Create a User
 * @param {String}name
 * @param {Number}age
 * @param {String}email
 * @param {Number}phoneNumber
 * @returns {Promise<*>} Resolves to the JSON object for the document created by calling save
 */
const createUser = async (name, age, email, phoneNumber) => {
    const user = new User({name: name, age: age, email: email, phoneNumber: phoneNumber});
    return user.save();
}

/**
 * Search for a user
 * @param filter
 * @returns {Promise<Array<HydratedDocument<InferSchemaType<*>, ObtainSchemaGeneric<*, "TVirtuals"> & ObtainSchemaGeneric<*, "TInstanceMethods">, ObtainSchemaGeneric<*, "TQueryHelpers">>>>}
 */
const searchUser = async (filter) => {
    const query = User.find(filter);
    return query.exec();
}

/**
 * Update a User
 * @param filter
 * @param update
 * @returns {Promise<*>}
 */
const updateUser = async (filter, update) =>{
    const result = await User.updateOne(filter, update);
    return result.modifiedCount;
}

/**
 * Delete a User
 * @param filter
 * @returns {Promise<*>}
 */
const deleteRecord = async (filter) => {
    const result = await User.deleteMany(filter);
    return result.deletedCount;
}

/**
 * Open MongoDB for access
 */
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Export the Model functions for the Controller to use
 */
export {createUser, searchUser, updateUser,  deleteRecord};