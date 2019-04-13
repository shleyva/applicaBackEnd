//Rutas para NGO.

const express = require("express");
const mongoose = require("mongoose");
const Ngo = require("../models/Ngo");

const router = express.Router();

//ONG ADD
//OJO: Cambiar a organizaciones/add!!
router.post("/ngo/add", (req, res) => {
  const {
    ngoName,
    rep,
    description,
    location,
    activities,
    since,
    logo,
    projects
  } = req.body;
  const newNgo = new Ngo({
    ngoName,
    rep,
    description,
    location,
    activities,
    since,
    logo,
    projects
  });
  newNgo
    .save()
    .then(() => {
      console.log("Organización registrada correctamente!");
      res.json(newNgo);
    })
    .catch(err => console.log(err));
});

//NGO LIST
//CAmbiar en react weey!
router.get("/organizaciones", (req, res, next) => {
  Ngo.find()
    .then(ngo => {
      return res.json(ngo);
    })
    .catch(err => {
      console.log(err);
    });
});

//NGO Specific

router.get("/organizaciones/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El id Apesta" });
    return;
  }

  Ngo.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

//NGO Specific UPDATE
router.put("/organizaciones/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El ID apesta" });
    return;
  }

  Ngo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `La ONG ${req.params.id} ha sido actualizada.` });
    })
    .catch(err => {
      res.json(err);
    });
});

//NGO SPECIFIC Delete

router.delete("/organizaciones/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Ngo.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `${req.params.ngoName} ha sido eliminada` });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
