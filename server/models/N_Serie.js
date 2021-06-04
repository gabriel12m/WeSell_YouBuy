module.exports = (sequelize, DataTypes) => {
  var N_Series = sequelize.define(
    "n_serie",
    {
      numSerie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  return N_Series;
};
