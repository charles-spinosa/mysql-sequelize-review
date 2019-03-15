const Sequelize = require('sequelize');
var connection = require('./index');

const Model = connection.define('todos', {
    name: { type: Sequelize.STRING, allowNull: false}},
    {timestamps: false}
);

connection
    .sync()
    .then(() => console.log('synced the stuff!'))
    .catch(error => console.error(error)); 

module.exports = Model;