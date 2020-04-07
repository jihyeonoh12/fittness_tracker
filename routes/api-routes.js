var path = require("path");
const db = require("../models");


module.exports = function(app) {
      
      app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });

      });

      // app.put("/api/workouts/:id", (req, res) => {
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
        
        db.Workout.create(req.body).then(function(dbWorkout) {
          res.json(dbWorkout);

      }); 
    })




};