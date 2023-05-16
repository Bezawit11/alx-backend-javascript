export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { // eslint-disable-line arrow-body-style
      return ({ status: 200, body: 'success' });
    })
    .catch(() => {
      return new Error(); // eslint-disable-line arrow-body-style
    })
    .finally(() => { console.log('Got a response from the API'); // eslint-disable-line brace-style
    });
}
