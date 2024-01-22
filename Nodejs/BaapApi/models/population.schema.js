const mongoose = require("mongoose");

const population = new mongoose.Schema({
  groupId: Number,
  year: Number,
  mailcount: Number,
  femailcount: Number,
  totalcount: Number,
});

const populationModal = mongoose.model("population", population);

module.exports = populationModal;
