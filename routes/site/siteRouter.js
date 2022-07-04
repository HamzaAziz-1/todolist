const express = require("express");
const router = express.Router();
const Task = require("../../models/Tasks");

router.get("/create", async (req, res) => {
  res.render("tasks/create");
});
router.post("/create", async (req, res) => {
  let record = new Task(req.body);
     await record.save();
    res.redirect("/tasks");
  
});
router.get("/edit/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  res.render("tasks/edit", { task: task });
});

router.post("/edit/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  task.name = req.body.name;
  task.time = req.body.time;
  task.status = req.body.status;
  await task.save();
  res.redirect("/tasks");
});
router.get("/delete/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  await task.delete();
  res.redirect("/tasks");
});
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("tasks/list", { tasks: tasks });
});

module.exports = router;
