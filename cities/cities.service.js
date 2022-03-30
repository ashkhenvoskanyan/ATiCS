const NotFoundError = require("../errors/not-found.error"); // import
const citiesRepository = require("./cities.repository"); //import
module.exports = { // export object 
  async getCityByZipCode(zipCode) { // async function 
    try {
      return await citiesRepository.getCityDataByZipCode(zipCode); // call function citiesRepository
    } catch {
      throw new NotFoundError("city not found");
    }
  },
};
