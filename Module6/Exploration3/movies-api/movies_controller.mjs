import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as movies from './movies_model.mjs';

const app = express();

const PORT = process.env.PORT;

app.get("/create", asyncHandler(async (req, res) => {
    const movie = await movies.createMovie(req.query.title, req.query.year, req.query.language);
    res.send(movie)
}))

app.get('/retrieve', asyncHandler(async (req, res) => {
    let filter = {};
    if(req.query !== undefined){
        filter = req.query
    }
    const result = await movies.findMovies(filter);
    res.send(result);
}))

app.get("/update", asyncHandler(async  (req, res) => {
    console.log(req.query.update)
    const update = {};
    // if (update) {
    //     update = req.query.update
    // }
    const resultVal = await movies.updateMovie({_id: req.query._id}, update);
    res.send({numMoviesUpdated: resultVal});
}))

app.get("/delete", asyncHandler(async (req, res) => {
    const deleteMovie = {};
    const deleteResult = await movies.deleteById(req.query._id);
    res.send({movieDeleted: deleteResult});
}))

// movies.createMovie("Breakfast Club", 1984, "English")

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});