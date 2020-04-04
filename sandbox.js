// using async and await
const getData = async () => {
  const response = await fetch('./todos/messsi.json');

  if(response.status !== 200) {
    throw new Error('can not fetch the data.')
  }

  const data = await response.json();
  // console.log(data);
  return data;

}


getData()
.then(data => console.log('resolved', data))
.catch(error => console.log('could not fetch the data', error.message))


