var path = require("path");
const db = require("../models");


module.exports = function(app) {
      
      app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkouts => {
            jsonWorkouts = []
            for (var i = 0; i < dbWorkouts.length; i++) {
              var jsonWorkout = dbWorkouts[i].toJSON();
              var totalDuration = 0;
              for (var j =0; j < jsonWorkout.exercises.length; j++) {
                totalDuration += jsonWorkout.exercises[j].duration;
              }
              jsonWorkout.totalDuration = totalDuration;
              jsonWorkouts.push(jsonWorkout);
            }
            res.json(jsonWorkouts);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findById(req.params.id).then(dbWorkout => {
          console.log(dbWorkout);
          exercise = {
            "type": req.body.type,
            "name": req.body.name,
            "distance": req.body.distance,
            "duration": req.body.duration,
            "weight": req.body.weight,
          }
          dbWorkout.exercises.push(exercise);
          dbWorkout.save().then(function(dbWorkout) {
              res.json(dbWorkout);
          }); 
        })
      });
      //   db.Workout.update({
      //     where: {
      //       id: req.params.id
      //   })
      //     .then(dbWorkout => {
      //       res.json(dbWorkout.id);
      //     })
      //     .catch(err => {
      //       res.json(err);
      //     });
      // });

      app.post("/api/workouts", (req, res) => {
        const workout = new db.Workout({})
        workout.save().then(function(dbWorkout) {
          res.json(dbWorkout);
      }); 
    })




};