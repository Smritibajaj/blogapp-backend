const mongoose = require("mongoose");
const Blog = require('./blog.schema');
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
}, {
  timestamps: true,
});

UserSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret.password;
    return ret;
  },
});

UserSchema.virtual("blogs", {
  ref: "blog",
  localField: "_id",
  foreignField: "owner",
});

module.exports = mongoose.model("user", UserSchema);
