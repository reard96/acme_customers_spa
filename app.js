const list = document.getElementById('customerList');
const button = document.getElementById('button');

fetch('/api/customers')
  .then(response => response.json())
  .then(custObj => {
    custObj.forEach(customer => {
      addCustomer(customer.id, customer.email);
      })
    })
  .catch(error => console.log(error));

const addCustomer = ((id, email) => {
  var li = document.createElement('li');
  li.append(email);
  list.append(li);
  li.addEventListener('click', function() {
    fetch(`/api/customers/${customer}`, {
      method: 'delete'
    })
    .then(() => {
      li.remove();
    })
    .catch(error => console.log(error));
  });
});

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  fetch('/api/customers', { method: 'post' })
  .then(response => response.json())
  .then(result => {
    var customer = result.customer;
    var li = document.createElement('li');
    li.append(customer);
    customerList.append(li);
    li.addEventListener('click', function() {
      fetch(`/api/customers/${customer}`, {
        method: 'delete'
      })
      .then(() => {
        li.remove();
      })
  });
});
