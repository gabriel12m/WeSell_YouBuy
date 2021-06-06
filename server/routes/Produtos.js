const express = require("express");
const router = express.Router();
const { produtos } = require("../models");

router.get("/", async (req, res) => {
  const allprodutos = await produtos.findAll();
  res.json(allprodutos);
});

router.post("/", async (req, res) => {
  const produto = req.body;
  await produtos.create(produto);
  res.json(produto);
});

module.exports = router;
