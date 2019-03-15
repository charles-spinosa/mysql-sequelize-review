const Sequelize = require('sequelize');
const connection = new Sequelize('review', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

connection
    .authenticate()
    .then(() => console.log('connected to sql'))
    .catch(error => console.error(error));


module.exports = connection;