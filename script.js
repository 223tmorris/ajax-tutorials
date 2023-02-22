// // video 1

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('calback function fired');
// }, 2000); 

// console.log(3);
// console.log(4);





// // video 2

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request, request.readyState);
//   if(request.readyState === 4){
//     console.log(request, request.responseText);
//   }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();





// // video 3

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   // console.log(request, request.readyState);
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request, request.responseText);
//   } else if(request.readyState === 4){
//     console.log('could not fetch the data');
//   }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();





// // video 4

// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//       callback(undefined, request.responseText);
//     } else if(request.readyState === 4){
//       callback('could not fetch data', undefined);
//     }
//   });
  
//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//   request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//   console.log('callback fired');
//   // console.log(err, data);
//   if(err){
//     console.log(err);
//   } else{
//     console.log(data);
//   }
// });

// console.log(3);
// console.log(4);





// // video 5

// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if(request.readyState === 4){
//       callback('could not fetch data', undefined);
//     }
//   });
  
//   request.open('GET', 'todos.json');
//   request.send();
// };

// getTodos((err, data) => {
//   console.log('callback fired');
//   // console.log(err, data);
//   if(err){
//     console.log(err);
//   } else{
//     console.log(data);
//   }
// });





// video 6

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });
  
  request.open('GET', resource);
  request.send();
};

getTodos((err, data) => {
  console.log('callback fired');
  // console.log(err, data);
  if(err){
    console.log(err);
  } else{
    console.log(data);
  }
});

// video 6 at 2:15