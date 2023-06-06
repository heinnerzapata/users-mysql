const {DataTypes} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    });
    return Users;
};