// 5. creating the callback function for reusable code :D
const getData = (callback) => {
  // 1. first creating the async request variable
  const request = new XMLHttpRequest();

  // 4. using addEventListener for tracking the state of the data using readyStateChange
  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText) // turning JSON into Object
      callback(undefined, data);
    } else if(request.readyState === 4) {
      callback('could not fetch the data', undefined);
    }
  })

  // 2. creating the open request ( what to do -- GET or POST )
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')


  // 3. receiving the response
  request.send()
}


// 6. calling the callback function

// 7. callback taking an argument ( err - for error catching -- data - for data catching)
getData((err, data) => {
  console.log('callback fired');
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
