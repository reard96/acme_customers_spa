const list = document.getElementById('customerList');
const button = document.getElementById('button');

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


fetch('/api/customers')
  .then(response => response.json())
  .then(customers => {
    customers.forEach(customer => {
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
      })
    })
  });
