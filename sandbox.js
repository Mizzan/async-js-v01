// 5. creating the callback function for reusable code :D
const getData = (resource) => {

  // creating a promise
  return new Promise((resolve, reject) => {
    // 1. first creating the async request variable
    const request = new XMLHttpRequest();

    // 4. using addEventListener for tracking the state of the data using readyStateChange
    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText) // turning JSON into Object
        resolve(data);
      } else if(request.readyState === 4) {
        reject('could not fetch the data');
      }
    })

    // 2. creating the open request ( what to do -- GET or POST )
    request.open('GET', resource)

    // 3. receiving the response
    request.send()
  })
}
// 6. calling the callback function

// 7. callback taking an argument ( err - for error catching -- data - for data catching)
// 8. callback hell for getting data one after another below is the callback hell

// as getData is returning a promise we dont need this

// getData('./todos/messi.json', (err, data) => {
//   console.log('Getting Messi Data - 1');
//   console.log(data);
//   getData('./todos/suarez.json', (err, data) => {
//     console.log('Getting Suarez Data - 2');
//     console.log(data);
//     getData('./todos/neymar.json', (err, data) => {
//       console.log('Getting Neymar Data - 3');
//       console.log(data);
//     })
//   })
// })


// using promise chaining to get multiple data request
getData('./todos/messi.json')
  .then(data => {
    console.log('Promise 1 resolved',data)
    return getData('./todos/suarez.json')
  })
  .then(data => {
    console.log('Promise 2 resolved', data);
    return getData('./todos/neymar.json')
  })
  .then(data => {
    console.log('Promise 3 resolved', data);
  })
  .catch(error => console.error(error))


// // promise example

// // creating new promise which takes two arguments - one is resolve and another one reject
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve('some data')
//     // reject('some data')
//   })
// }

// // calling the getSomething function and chaining the then method
// getSomething()
//   .then(data => console.log(data))
//   .catch(err => console.log(err))