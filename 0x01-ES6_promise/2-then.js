export default function handleResponseFromAPI(promise) {
  promise
  .then() => {
    console.log('Got a response from the API')
  })
  .catch(error => {
     console.log('Got a response from the API')
  })
  .finally(() => {
    console.log('Got a response from the API')
  })
}
