const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("/models");

const app = express();
app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://jane_admin:Test123@fitness-tracker-db-ttn7w.mongodb.net/", { useNewUrlParser: true });

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
