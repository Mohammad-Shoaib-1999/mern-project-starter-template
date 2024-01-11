const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    // type: Schema.Types.ObjectId,
    type:String,
    ref: "user",
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  title: {
    type: String,
  },
  text: { type: String },
  location: { type: String },
  postphoto: { type: String },
  comments: [
    {
      user: { type: String },
      text: { type: String },
      name: { type: String },
      avater: { type: String },
      date: { type: Date, default: Date.now() },
      commentphoto: {
        type: [String],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", postSchema);
