const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema ({
 name: String,
 start: String,
 end: String, 
 ngo: {type: Schema.Types.ObjectId, ref: "Ngo"},
 ngoOwner: {type: Schema.Types.ObjectId, ref: "user"}, //Usuario propietario
 description: String,
 goal: String,
 outcome: String,
 location: String,
 pic: String,
 vacants: [{type: Schema.Types.ObjectId, ref: "vacant"}]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project; 