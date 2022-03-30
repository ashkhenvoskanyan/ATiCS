const rewire = require("rewire"); // provied getter and setter for requierd files
const citiesRepository = rewire("../cities/cities.repository"); // requier
const axios = require("axios"); 
const chai = require("chai"); // unit testing tool 
const chaiAsPromised = require("chai-as-promised"); // to handle async cases
const sinon = require("sinon"); // to stub axios get 
chai.use(chaiAsPromised);
chai.should();
describe("Test for the cities.repository.js file", function () { 
  describe("Test for the getCityDataByZipCode function", function () { // what testing
    const stub = sinon
      .stub(axios, "get")
      .withArgs("https://api.zippopotam.us/us/94122")
      .resolves({
        data: `{"post code": "94122", "country": "United States", "country abbreviation": "US", "places": [{"place name": "San Francisco", "longitude": "-122.4836", "state": "California", "state abbreviation": "CA", "latitude": "37.7593"}]}`,
      });
    citiesRepository.__set__("recievedData", stub); // stub put the axios get value into the recievedData
    it("returning expected output", function () { // basic unit test
      citiesRepository
        .getCityDataByZipCode("94122")
        .should.eventually.be.equal("San Francisco, CA, United States");// async 
    });
    it("called once", function () { // basic unit test
      chai.expect(sinon.assert.calledOnce(axios.get));
    });
  });
});
