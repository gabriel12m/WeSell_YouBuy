const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const utilizadoresRouter = require("./routes/Utilizadores");
app.use("/utilizadores", utilizadoresRouter);
const comprasRouter = require("./routes/Compras");
app.use("/compras", comprasRouter);
const categoriasRouter = require("./routes/Categorias");
app.use("/categorias", categoriasRouter);
const analisesRouter = require("./routes/Analises");
app.use("/analises", analisesRouter);
const nseriesRouter = require("./routes/N_Serie");
app.use("/nseries", nseriesRouter);
const produtosRouter = require("./routes/Produtos");
app.use("/produtos", produtosRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
