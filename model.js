const { db } = require('./db');

const User = db.sequelize.define('user', {
    id: { type: db.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: db.DataTypes.STRING(50), allowNull: false },
    mobile_no: { type: db.DataTypes.STRING(20), allowNull: false },
    email: { type: db.DataTypes.STRING(100), allowNull: false },
    location: { type: db.DataTypes.TEXT, allowNull: false },
});

module.exports = User;