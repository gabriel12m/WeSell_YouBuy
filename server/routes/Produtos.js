const express = require("express");
const router = express.Router();
const { produtos } = require("../models");

router.get("/:idProduto", async (req, res) => {
  const idProduto = req.params.idProduto;
  const produto = await produtos.findAll({ where: { idProduto: idProduto } });
  res.json(produto);
});

module.exports = router;
