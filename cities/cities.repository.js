const axios = require("axios"); // to make get requests
module.exports = { // export object
  async getCityDataByZipCode(zipCode) { // async function
    let recievedData = await axios.get( //wait till axios get responce
      `https://api.zippopotam.us/us/${zipCode}`
    );
    //taking necessry data and returning
    return `${recievedData.data["places"][0]["place name"]},  
            ${recievedData.data["places"][0]["state abbreviation"]}, 
            ${recievedData.data["country"]}`;
  },
};
