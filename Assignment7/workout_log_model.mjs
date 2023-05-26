import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true }
);


// Connect to the database
const db = mongoose.connection;

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: {type: String, required: true}
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Workout = mongoose.model("Workout", exerciseSchema);

/**
 * Function addes a new workout record to the dB
 * @param name - name of the exercise
 * @param reps - number of reps completed
 * @param weight - amount of weight in the exercise
 * @param unit - either lbs or kgs
 * @param date - date of the workout
 * @returns {Promise<*>}
 */
const createWorkout = async (name, reps, weight, unit, date) => {
    const workout = new Workout ({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return workout.save();
}

/**
 * Function retrieves and returns every entry in the dB
 * @returns {Promise<Array<HydratedDocument<InferSchemaType<*>, ObtainSchemaGeneric<*, "TVirtuals"> & ObtainSchemaGeneric<*, "TInstanceMethods">, ObtainSchemaGeneric<*, "TQueryHelpers">>>>}
 */
const allWorkouts = async () => {
    const query = Workout.find()
    return query.exec();
};

/**
 * Function searches for and returns an exercise record if it exists
 * @param filter - the ID to search for
 * @returns {Promise<any>}
 */
const searchWorkouts = async (filter) => {
    const query = Workout.findById(filter);
    return query.exec();
};

/**
 * Function updates a workout record
 * @param id - the ID to search for to update
 * @param name - The name of the exercise
 * @param reps - number of reps completed
 * @param weight - weight involved
 * @param unit - unit of measurement for the weight
 * @param date - date of the workout
 * @returns {Promise<*>}
 */
const updateWorkout = async (id, name, reps, weight, unit, date) => {
    const updateResult = await Workout.replaceOne ({_id: id}, {name: name,
        reps: reps, weight: weight, unit: unit, date: date})
    return updateResult.modifiedCount
};

/**
 * Function deletes a record from the dB if the ID sent exists
 * @param filter - the ID to delete
 * @returns {Promise<*>}
 */
const deleteWorkout = async (filter) => {
    const result = await Workout.deleteMany(filter);
    return result.deletedCount;
}

// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Export functions for the controller to use
 */
export { createWorkout, allWorkouts, searchWorkouts, updateWorkout, deleteWorkout };