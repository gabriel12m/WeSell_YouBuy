const express = require("express");
const router = express.Router();
const { categorias } = require("../models");

router.get("/", async (req, res) => {
  const allcategorias = await categorias.findAll();
  res.json(allcategorias);
});

router.post("/", async (req, res) => {
  const categoria = req.body;
  await categorias.create(categoria);
  res.json(categoria);
});

module.exports = router;
