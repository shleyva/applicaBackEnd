const mongoose = ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  username: String,
  password: String,
  email: String,
  surname: String, 
  dob: String,
  tel: Number,
  country: String, 
  gender: String, 
  zipCode: String,
  pPic: String,
  background:[String],
  interest: [String],
  based: [String],
},{
  timestamps: {
    createdAt: "created_at", updatedAt: "updated_at"
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
