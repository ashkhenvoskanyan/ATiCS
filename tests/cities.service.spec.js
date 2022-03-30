const rewire = require("rewire");
const citiesService = rewire("../cities/cities.service");
const citiesRepository = require("../cities/cities.repository");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const faker = require("faker"); // generates fake data
chai.use(chaiAsPromised);
chai.should();
describe("Test for the cities.service.js file", function () {
  describe("Test for the getCityByZipCode function", function () {
    const stub = sinon
      .stub(citiesRepository, "getCityDataByZipCode")
      .withArgs("94122")
      .returns("San Francisco, CA, United States");
    citiesService.__set__("citiesRepository", stub);
    it("for 94122", function () { // checks with correct data
      chai
        .expect(citiesService.getCityByZipCode(94122))
        .to.eventually.be.equal("San Francisco, CA, United States");
    });
    it("for a fake zip code", function () { // checks with fake data 
      chai
        .expect(citiesService.getCityByZipCode(faker.address.zipCode()))
        .to.eventually.be.rejectedWith("city not found");
    });
  });
});
