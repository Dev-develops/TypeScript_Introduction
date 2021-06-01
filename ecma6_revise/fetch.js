// Fetch used to get the data from a particular url and returns a promise

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(err => { console.log(err); })