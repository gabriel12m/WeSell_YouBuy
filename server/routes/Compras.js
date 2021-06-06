const express = require("express");
const router = express.Router();
const { compras } = require("../models");

router.get("/", async (req, res) => {
  const allcompras = await compras.findAll();
  res.json(allcompras);
});

router.post("/", async (req, res) => {
  const compra = req.body;
  await compras.create(compra);
  res.json(compra);
});

module.exports = router;
