const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const utilizadoresRouter = require("./routes/Utilizadores");
const comprasRouter = require("./routes/Compras");
const categoriasRouter = require("./routes/Categorias");
const analisesRouter = require("./routes/Analises");
const nseriesRouter = require("./routes/N_Serie");
const fotografiasRouter = require("./routes/Fotografias");
const produtosRouter = require("./routes/Produtos");

app.use("/utilizadores", utilizadoresRouter);
app.use("/compras", comprasRouter);
app.use("/categorias", categoriasRouter);
app.use("/analises", analisesRouter);
app.use("/nseries", nseriesRouter);
app.use("/fotografias", fotografiasRouter);
app.use("/produtos", produtosRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
