module.exports = (sequelize, DataTypes) => {
  var Analises = sequelize.define(
    "analises",
    {
      score: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comentario: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  return Analises;
};
