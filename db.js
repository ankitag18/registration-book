const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sql12325011', 'sql12325011', 'dHgsUuqKpg', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql'
});

module.exports.db = { sequelize, DataTypes };