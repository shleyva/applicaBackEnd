const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ngoSchema = new Schema({
  ngoName: String,
  rep: {type: Schema.Types.ObjectId, ref: "User"},
  description: String,
  location: String,
  activities: [String], //Comparable con Interests en User
  since: String,
  logo: String,
  projects: [{type: Schema.Types.ObjectId, ref: "Project"}],
  
})

const Ngo = mongoose.model('Ngo', ngoSchema)

module.exports = Ngo;