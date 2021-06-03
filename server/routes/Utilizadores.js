const express = require("express");
const router = express.Router();
const { Utilizadores } = require("../models");

router.get("/", async (req, res) => {
  const listadeUtilizadores = await Utilizadores.findAll();
  res.json(listadeUtilizadores);
});

router.post("/", async (req, res) => {
  const user = req.body;
  await Utilizadores.create(user);
  res.json(user);
});

module.exports = router;
