// starting to use fetch api and promise together

const data = fetch('./todos/messi.json')
      .then(resolve => {
        console.log('resolved', resolve);
        return resolve.json();// this also returns a promise thats why we need to add another then method below to convert the data
      })
      .then(data => console.log(data))
      .catch(error => console.log('could not fetch the data', error))


// All i need to remember is the 3 lines of code
// 1. I fetch the data
// 2. take the fetch data response and return the json which returns a promise
// 3. adding another then for accessing the actual data
// 4. Lastly adding the catch method for catching any probable errors.