const dbConfig = require("./../config/db.conf");
const Sequelize = require("sequelize");
const {dialect} = require("../config/db.conf");

console.log("dbConfig", dbConfig);
console.log("entra 1");

try {

    console.log("entra 2");

    const sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
            dialect: dbConfig.dialect
        }
    );

    console.log("entra 3");

    const sqlDb = {};

    sqlDb.Sequelize = Sequelize;
    sqlDb.sequelize = sequelize;

    sqlDb.users = require("./../api/sql/users/users.model")(sequelize, Sequelize);

} catch (e) {
    console.log(e);
}

console.log("entra 4");



module.exports = {};