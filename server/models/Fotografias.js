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
        type: DataTypes.STRING,
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
    models.fotografias.hasMany(models.produtos, {
      foreignKey: "idFotografia",
    });
  };

  return Fotografias;
};
