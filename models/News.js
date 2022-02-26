const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Мэдээний гарчгийг оруулна уу"],
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
      content1: {
        type: String,
        required: [true, "Мэдээгээ оруулна уу"],
        maxlength: [5000, "Мэдээний урт дээд тал нь 5000 тэмдэгт байх ёстой."],
      },
      content2: {
        type: String,
        required: [true, "Мэдээгээ оруулна уу"],
        maxlength: [5000, "Мэдээний урт дээд тал нь 5000 тэмдэгт байх ёстой."],
      }
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
