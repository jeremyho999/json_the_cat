const request = require("request");

const breedName = process.argv[2];

request("https://api.thecatapi.com/v1/breeds/", (error, response, body) => {
  //console.log("body:", body);
  //console.log(typeof body);
  console.log("error:", error);

  const cats = JSON.parse(body);
  //console.log(cats[0]);
  //console.log(typeof cats[0]);

  const names = [];

  for (const cat of cats) {
    if (cat.name === breedName) {
      console.log(cat.description);
      names.push(cat.name);
    }
  }

  if (names.length === 0) console.log("The requested breed is not found. Please try again.");

});