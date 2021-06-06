const express = require("express");
const router = express.Router();
const { fotografias } = require("../models");

router.get("/", async (req, res) => {
  const allfotografias = await fotografias.findAll();
  res.json(allfotografias);
});

router.post("/", async (req, res) => {
  const fotografia = req.body;
  await fotografias.create(fotografia);
  res.json(fotografia);
});

module.exports = router;
