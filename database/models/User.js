module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    apellido: {
      type: dataTypes.STRING,
    },
    fechaDeNacimiento: {
      type: dataTypes.DATE,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    telefono: {
      type: dataTypes.STRING,
    },
    category_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    image: {
      type: dataTypes.STRING,
    },
    createdAt: { type: dataTypes.INTEGER, field: "created_at" },
    updatedAt: { type: dataTypes.INTEGER, field: "updated_at" },
    deletedAt: { type: dataTypes.INTEGER, field: "deleted_at" },
  };

  let config = {
    tableName: "users",
    timestamps: true,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};