const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('registration_book', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports.db = { sequelize, DataTypes };