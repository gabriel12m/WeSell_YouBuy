const express = require("express");
const router = express.Router();
const { nseries } = require("../models");

router.get("/", async (req, res) => {
  const allnserie = await nseries.findAll();
  res.json(allnserie);
});

router.post("/", async (req, res) => {
  const nserie = req.body;
  await nseries.create(nserie);
  res.json(nserie);
});

module.exports = router;
