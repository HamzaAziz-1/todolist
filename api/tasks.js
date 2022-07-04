const express = require("express");
const router = express.Router();
const Task = require('../models/Tasks');

router.post("/", async (req, res) => {
  let task = new Task(req.body);
  await task.save();
  res.send(task);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.name = req.body.name;
  task.time = req.body.time;
  task.status = req.body.description;
  await task.save();
  res.send(task);
});
router.delete("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.delete();
  res.send(task);
});
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.send(task);
});
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

module.exports = router;
