function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // API call logic here
      if (responseFromAPI) {
        // resolve with API response
        resolve(responseFromAPI); 
      } else {
        // reject with error message
        reject("Error: API call failed");
      }
    });
  }
  
  export default getResponseFromAPI;
  