const express = require("express");
const mongoose = require("mongoose");
const Project = require("../models/Project");

const router = express.Router();

router.post("/project/add", (req, res) => {
  const {
    name,
    start,
    end,
    description,
    ngo,
    ngoOwner,
    goal,
    outcome,
    location,
    pic,
    vacants
  } = req.body;
  const newProject = new Project({
    name,
    start,
    end,
    description,
    ngo,
    ngoOwner,
    goal,
    outcome,
    location,
    pic,
    vacants
  });
  newProject
    .save()
    .then(() => {
      console.log("Proyecto guardado con éxito!");
      res.json(Project.name);
    })
    .catch(err => console.log(err));
});
// Lista de Projects.
router.get("/projectList", (req, res) => {
  Project.find()
    .then(Project => {
      return res.json(Project);
    })
    .catch(err => {
      console.log(err);
    });
});

//Project específico

router.get("/projects/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El AIDi APESta" });
    return;
  }

  Project.findById(req.params.id)
    .then(theProject => {
      res.status(200).json(theProject);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
