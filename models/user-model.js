const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    surname: String,
    dob: String,
    tel: Number,
    country: String,
    gender: String,
    zipCode: String,
    pPic: String,
    background: [String],
    interest: [String],
    based: [String],
    applicant: Boolean,
    ngoOwner: Boolean
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
