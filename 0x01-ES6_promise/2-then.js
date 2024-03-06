function handleResponseFromAPI(promise){
  return new Promise((resolve, reject) => {
    if(promise) resolve({ status: 200, body: 'success' });
    else reject(Error('Got a response from the API'));
  });
}

export default handleResponseFromAPI(promise);
