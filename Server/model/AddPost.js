const mongoose = require("mongoose");

const collegepostSchema = new mongoose.Schema({
  Organization: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Experience: {
    type: String,
    required: true,
  },
  Designation: {
    type: [
      {
        type: String,
        enum: ["UG", "PG", "PHD"],
      },
    ],
  },
  Nofopenings: {
    type: String,
  },
  Salary: {
    type: String,
  },
  College: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Signup",
    },
  ], 
});

const collegePost = mongoose.model("Posts", collegepostSchema);
module.exports = collegePost;
