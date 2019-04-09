const express = require('express');
const router  = express.Router();
const Ngo = require ('../models/Ngo')
const Project = require ('../models/Project')
const Vacant = require ('../models/Vacant')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Agregar Organización. 

router.post('/ngo/add', (req, res)=>{
  const {ngoName, rep, description, location, activities, since, logo, projects} = req.body;
  const newNgo = new Ngo ({ngoName, rep, description, location, activities, since, logo, projects})
  newNgo.save()
  .then(()=>{
    console.log("Organización registrada correctamente!")
    res.json(newNgo)
  })
  .catch(err=>console.log(err))
})

//Agregar Proyecto

router.post('/project/add', (req,res)=>{
  const {name, start, end, description, ngo, ngoOwner, goal, outcome, location, pic, vacants} = req.body;
  const newProject = new Project ({name, start, end, description, ngo, ngoOwner, goal, outcome, location, pic, vacants})
  newProject.save()
  .then(()=>{
    console.log("Proyecto guardado con éxito!")
    res.redirect(301, '/index')
  })
  .catch(err=>console.log(err))
})

//Agregar Vacante

router.post ('/vacant/add', (req,res)=>{
  const {parentProject, name, description, location, type, goal, target, background, startDate, endDate, provided, notes, specConditions, activities} = req.body;
  const newVacant = new Vacant ({parentProject, name, description, location, type, goal, target, background, startDate, endDate, provided, notes, specConditions, activities})
  newVacant.save()
  .then(()=>{
    console.log("Vacante guardada con éxito")
    res.json(newVacant)
  })
  .catch(err=>console.log(err))
})

//Lista de NGO's

router.get('/ngo/list', (req,res)=>{
  Ngo.find()
  .populate("user")
  .then(ngo => {
    return res.json(ngo)
  })
  .catch(err => {console.log(err)});
})

//Ruta para view de NGO's

router.get('/ngoList', (req,res)=>{
Ngo.find()
.populate("user")
.then(ngo=>{
  return res.render('ngoList',{ngo})
})
.catch(err=>{console.log(err)});
});


//Detalle de NGO

router.get('/ngo/detail/:id', (req,res)=>{
  let NgoId = req.params.id
  console.log(NgoId); //confirmar que se carga el Id correcto
  Ngo.findOne({'_id': NgoId})
  .then((Ngo)=>{
    res.json(ngo)
    console.log(ngo.ngoName)
  })
  .catch((err)=>console.log(err))
})

//GET Applicants (sólo con el ID de la Vacante)


module.exports = router;
