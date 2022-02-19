const mongoose = require("mongoose");
const Blog = require('./blog.schema');

const ImageSchema = new mongoose.Schema({
  image: Buffer,
});
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
  images: [ImageSchema]
});

UserSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret.password;
    delete ret.images;
    return ret;
  },
});

UserSchema.virtual("blogs", {
  ref: "blog",
  localField: "_id",
  foreignField: "owner",
});

module.exports = mongoose.model("user", UserSchema);
