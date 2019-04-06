const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const vacantSchema = new Schema ({
  name: String,
  project: {type: Schema.Types.ObjectId, ref: "project"},
  description: String,
  location: String, 
  type: String, //Servicio Social, Voluntariado.
  goal: String,
  target: String, //Perfil de las personas a las que se dirije la vacante
  background: [String], //Single-word tags del perfil de la vacante.
  startDate: String, 
  endDate: String,
  provided: String, //Si hay algo que la organización provéa, hospedaje, alimentación, etc. 
  notes: String, //notas de la ONG al aplicante
  specConditions: String, //Condiciones especiales de la vacante. 
  activities: [String], //Array de actividades a realizar
})

const Vacant = mongoose.model('Vacant', vacantSchema)

module.exports = Vacant; 
