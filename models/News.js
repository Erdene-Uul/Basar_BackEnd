const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Мэдээний гарчгийг оруулна уу"],
      unique: true,
      trim: true,
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    description: {
      type: String,
      required: [true, "Мэдээний тайлбарыг оруулна уу"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Мэдээгээ оруулна уу"],
      trim: true,
      maxlength: [5000, "Мэдээний урт дээд тал нь 5000 тэмдэгт байх ёстой."],
    },
    author: {
      name: String,
      photo: String,
      position: String
    },
    categoryName: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);


module.exports = mongoose.model("News", NewsSchema);
