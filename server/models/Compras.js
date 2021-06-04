module.exports = (sequelize, DataTypes) => {
  var Compras = sequelize.define(
    "compras",
    {
      idCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      data_compra: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  Compras.associate = function (models) {
    models.compras.belongsTo(models.utilizadores, {
      foreignKey: "idUtilizador",
    });
    models.compras.belongsToMany(models.produtos, {
      through: "n_serie",
      foreignKey: "idCompra",
      primaryKey: true,
    });
  };

  return Compras;
};
