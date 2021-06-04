module.exports = (sequelize, DataTypes) => {
  var Categorias = sequelize.define(
    "categorias",
    {
      idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantidade_prods: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  Categorias.associate = function (models) {
    models.categorias.hasMany(models.produtos, {
      foreignKey: "idCategoria",
    });
  };

  return Categorias;
};
