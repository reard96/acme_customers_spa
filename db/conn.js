const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_customers_spa');

module.exports = conn;
