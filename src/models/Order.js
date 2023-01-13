const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false, //si esta vacia, que ni venga
      },
      products_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "canceled"),
        allowNull: false,
        default: "pending",
      },
    },
    {
      timestamps: true, //interesa saber cuando se creo
    }
  );
};
