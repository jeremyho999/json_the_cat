const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

  request(url, (error, response, body) => {
    let errorDesc;
    let breedDesc;
    const data = JSON.parse(body);

    if (error) {
      errorDesc = error;
      breedDesc = null;
    } else if (data.length === 0) {
      errorDesc = "The requested breed is not found. Please try again.";
      breedDesc = null;
    } else {
      errorDesc = null;
      breedDesc = data[0].description;
    }

    callback(errorDesc, breedDesc);
  });
};


module.exports = { fetchBreedDescription };