
// // GET
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))


// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then( response => {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   })
//   .finally( () => {
//     // always executed
//   });

const user = {
    firstName: 'Fred',
    lastName: 'Flintstone'
}


axios.post('https://jsonplaceholder.typicode.com/posts', user)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });