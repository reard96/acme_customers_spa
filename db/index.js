const conn = require('./conn');
const { Sequelize } = conn;
const Customer = require('./Customer');

const initialCustomers = [
  'jeff@amazon.com',
  'tim@apple.com',
  'mark@facebook.com',
  'bill@microsoft.com',
  'jack@twitter.com',
  'elon@tesla.com'
];

const sync = () => {
  return conn.sync( {force: true} );
};

const seedCustomers = () => {
  return Promise.all(initialCustomers.map(customer => Customer.create(customer)));
};

const seed = () => {
  return seedCustomers();
};

module.exports = {
  models: {
    Customer
  },
  sync,
  seed
};
