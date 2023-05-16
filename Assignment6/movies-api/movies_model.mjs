import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

// Define the Schema
const movieSchema = mongoose.Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    language: {type: String, required: true}
});

// Compile the model for the schema - this must be done after the schema is defined
const Movie = mongoose.model("Movie", movieSchema);

/**
 * Create a Movie
 * @param {String}title
 * @param {Number}year
 * @param {String}language
 * @returns {Promise<*>} Resolves to the JSON object for the document created by calling save
 */
const createMovie = async (title, year, language,) => {
    const movie = new Movie({title: title, year: year, language: language});
    return movie.save();
}

const findMovies = async (filter) => {
    const query = Movie.find(filter);
    return query.exec();
}

const updateMovie = async (filter, update) =>{
    const result = await Movie.updateOne(filter, update);
    return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Movie.deleteOne({ _id: _id });
    return result.deletedCount;
}

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {createMovie, findMovies, updateMovie, deleteById};