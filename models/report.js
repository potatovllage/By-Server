const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("report", {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    school: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    check: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
