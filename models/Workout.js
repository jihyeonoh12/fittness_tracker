const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please insert type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Please insert name of exercise"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Please insert duration"
            },
            weight: {
                type: Number,
                trim: true,
                default: 0,
            },
            reps: {
                type: Number,
                trim: true,
                default: 0
            },
            sets: {
                type: Number,
                trim: true,
                default: 0
            },
    
        }]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
