const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // We expect no error for this scenario:
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // Compare returned description:
      assert.equal(expectedDesc, desc.trim());
      // To test an async function, we need to use:
      done();
    });
  });

  it("returns an error for an non-existent breed", (done) => {
    fetchBreedDescription("Sjberian", (err, desc) => {
      // We expect no breed description for this scenario:
      assert.equal(desc, null);
      // We expect an error:
      const expectedError = "The requested breed is not found. Please try again.";

      assert.equal(expectedError, err.trim());

      done();
    });
  });
});