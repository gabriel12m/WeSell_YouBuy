const express = require("express");
const router = express.Router();
const { analises } = require("../models");

router.get("/", async (req, res) => {
  const allAnalises = await analises.findAll();
  res.json(allAnalises);
});

router.post("/", async (req, res) => {
  const analise = req.body;
  await analises.create(analise);
  res.json(analise);
});

module.exports = router;
