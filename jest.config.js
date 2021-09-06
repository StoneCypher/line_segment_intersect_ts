
module.exports = {

  preset                     : 'ts-jest',
  testEnvironment            : 'node',
  coveragePathIgnorePatterns : ['./node_modules/', "./src/ts/tests/"],
  collectCoverageFrom        : ["./src/ts/**/*.test.{js,ts}"]

};
