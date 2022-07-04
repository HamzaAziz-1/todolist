const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Tasks");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Ready to create new Task record?");
});

app.use("/api/tasks", require("./api/tasks"));
app.use("/tasks", require("./routes/site/siteRouter"));

app.listen(3300, () => {
  console.log("Listening on port 3300");
});

mongoose
  .connect("mongodb://localhost/tasksdb")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
