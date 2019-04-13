const express = require("express");
const router = express.Router();
const Ngo = require("../models/Ngo");
const Project = require("../models/Project");
const Vacant = require("../models/Vacant");
const mongoose = require("mongoose");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//Agregar Organización.

//Agregar Proyecto
//React OK!

//Agregar Vacante via Postman

router.post("/vacant/add", (req, res) => {
  const {
    parentProject,
    name,
    description,
    location,
    type,
    goal,
    target,
    background,
    startDate,
    endDate,
    provided,
    notes,
    specConditions,
    activities
  } = req.body;
  const newVacant = new Vacant({
    parentProject,
    name,
    description,
    location,
    type,
    goal,
    target,
    background,
    startDate,
    endDate,
    provided,
    notes,
    specConditions,
    activities
  });
  newVacant
    .save()
    .then(() => {
      console.log("Vacante guardada con éxito");
      res.json(newVacant);
    })
    .catch(err => console.log(err));
});

//Lista de NGO's

router.get("/ngo/list", (req, res) => {
  Ngo.find()
    .populate("user")
    .then(ngo => {
      return res.json(ngo);
    })
    .catch(err => {
      console.log(err);
    });
});

//Ruta para view de NGO's

router.get("/ngoList", (req, res) => {
  Ngo.find()
    .populate("user")
    .then(ngo => {
      return res.render("ngoList", { ngo });
    })
    .catch(err => {
      console.log(err);
    });
});

//Ruta para lista de vacantes
//React Ok!
router.get("/vacantList", (req, res) => {
  Vacant.find()
    .then(vacant => {
      return res.json(vacant);
    })
    .catch(err => {
      console.log(err);
    });
});

//Ruta para añadir vacantes vía Body
router.post("/vacant/addform", (req, res) => {
  const {
    parentProject,
    name,
    description,
    location,
    type,
    goal,
    target,
    background,
    startDate,
    endDate,
    provided,
    notes,
    specConditions,
    activities
  } = req.body;
  const newVacant = new Vacant({
    parentProject,
    name,
    description,
    location,
    type,
    goal,
    target,
    background,
    startDate,
    endDate,
    provided,
    notes,
    specConditions,
    activities
  });
  newVacant
    .save()
    .then(() => {
      console.log("Vacante guardada con éxito");
      return res.redirect("/vacantList");
    })
    .catch(err => console.log(err));
});

//Ruta para render de newVacant (Por algunar razón no funciona si va antes de post)
router.get("/vacantAdd", (req, res) => {
  res.render("newVacant");
});

//Detalle de NGO

router.get("/ngoList/:id", (req, res) => {
  let ngoId = req.params.id;
  console.log("got ID:" + ngoId);
  Ngo.findOne({ _id: ngoId })
    .populate("rep")
    .populate("projects")
    .then(ngo => {
      res.render("ngo-detail", { ngo });
    })
    .catch(err => console.log(err));
});

//GET Applicants (sólo con el ID de la Vacante)

module.exports = router;
