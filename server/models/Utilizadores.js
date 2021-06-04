module.exports = (sequelize, DataTypes) => {
  var Utilizadores = sequelize.define(
    "utilizadores",
    {
      idUtilizador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      datanascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contacto: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      morada: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cod_postal: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      NIF: {
        type: DataTypes.STRING(9),
        allowNull: false,
      },
    },
    { timestamps: false } // Desabilita o Create_At e o Update_At
  );

  Utilizadores.associate = function (models) {
    models.produtos.hasMany(models.compras, {
      foreignKey: "idUtilizador",
    });
    models.utilizadores.belongsToMany(models.produtos, {
      through: "analises",
      foreignKey: "idUtilizador",
      primaryKey: true,
    });
  };

  return Utilizadores;
};

// TODO : Adicionar password e roles
