// using async and await
const getData = async () => {
  const response = await fetch('./todos/messi.json');
  const data = await response.json();
  // console.log(data);
  return data;
}

console.log(1);
console.log(2);

getData()
.then(data => console.log('resolved', data))
.catch(error => console.log('could not fetch the data', error))

console.log(3);
console.log(4);


