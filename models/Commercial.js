const mongoose = require("mongoose");

const CommercialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    description: {
      type: String,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);


module.exports = mongoose.model("Commercial", CommercialSchema);