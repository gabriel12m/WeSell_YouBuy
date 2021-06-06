module.exports = (sequelize, DataTypes) => {
  var Fotografias = sequelize.define(
    "fotografias",
    {
      idFotografia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      data_foto: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  Fotografias.associate = function (models) {
    models.produtos.hasMany(models.fotografias, {
      foreignKey: "idProduto",
    });
  };

  return Fotografias;
};
