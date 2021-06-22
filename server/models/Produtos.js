const Categorias = require("./Categorias");

module.exports = (sequelize, DataTypes) => {
  var Produtos = sequelize.define(
    "produtos",
    {
      idProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detalhes: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  Produtos.associate = function (models) {
    models.produtos.belongsTo(models.categorias, {
      foreignKey: "idCategoria",
    });
    models.produtos.belongsToMany(models.utilizadores, {
      through: "analises",
      foreignKey: "idProduto",
      primaryKey: true,
    });
    models.produtos.belongsToMany(models.compras, {
      through: "n_serie",
      foreignKey: "idProduto",
      primaryKey: true,
    });
  };

  return Produtos;
};
