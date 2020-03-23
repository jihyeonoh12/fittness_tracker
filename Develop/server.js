const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.post("/submit", ({body}, res) => {
    const user = new User(body);
    user.setFullName();
    user.lastUpdatedDate();
  
    User.create(user)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });


db.Workout.create({ name: "fitness tracker" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.get("/index", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
