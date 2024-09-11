// apiRequest.js
const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function processData(url) {
  try {
    const data = await fetchData(url);
    
    // Perform transformations on the JSON data
    if (data) {
      // Example transformation: Logging the data
      console.log(data);
    }
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

// Example API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Call the function to fetch and process data
processData(apiUrl);