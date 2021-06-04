const express = require("express");
const router = express.Router();
const { utilizadores } = require("../models");

router.get("/", async (req, res) => {
  const allutilizadores = await utilizadores.findAll();
  res.json(allutilizadores);
});

router.post("/", async (req, res) => {
  const utilizador = req.body;
  await utilizadores.create(utilizador);
  res.json(utilizador);
});

module.exports = router;
