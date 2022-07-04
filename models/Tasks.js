const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    time: Date,
    status: String,
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
