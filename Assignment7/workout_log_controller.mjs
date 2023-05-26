import 'dotenv/config';
import * as Workout from './workout_log_model.mjs';
import express from 'express';
import asyncHandler from "express-async-handler";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Add a new exercise record to the workout log
 */
app.post('/exercises', (req, res) => {
    Workout.createWorkout(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(workout => {
        res.status(201).json(workout);
    })
        .catch(error => {
            res.status(400).json({Error: 'Create Request Failed'});
        })
});

/**
 * Retrieve all exercises from the dB.
 */
app.get('/exercises', (req, res) => {
    Workout.allWorkouts(req, res)
        .then( workout => {
            res.status(200).json(workout);
        })
        .catch(error => {
            res.status(400).json({Error: 'Retrieve Request Failed'});
        })
});

/**
 * Get the workout specified by the ID sent in the API call
 */
app.get('/exercises/:id', (req, res) => {
    const workoutID = req.params.id
        Workout.searchWorkouts(workoutID)
        .then( workout => {
            res.status(200).json(workout);
        })
        .catch(error => {
            res.status(400).json({Error: 'Retrieve Request Failed'});
        })
});

/**
 * Update the workout whose id is provided API call and set
 * Name, Reps, Weight, Unit and Date as needed.
 */
app.put('/exercises/:_id', asyncHandler( async (req, res) => {
    const updatedResult = await Workout.updateWorkout(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(updatedResult => {
            if (updatedResult === 1) {
                res.json({ _id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.weight,
                    unit: req.body.unit, date: req.body.date})
            } else {
                res.status(404).json({ Error: 'Update failed, ID does not exist' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Record to be updated does not exist' });
        });
}));

/**
 * Delete the workout whose id is provided API call
 */
app.delete('/exercises/:_id', (req, res) => {
    Workout.deleteWorkout({_id: req.params._id})
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Workout Record not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});