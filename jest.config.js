module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "clover"],
  collectCoverageFrom: [
    "src/**/*.js", // Include all .js files in the src directory
    "!src/**/*.test.js", // Exclude test files if any are in src/
    "!src/.internal/**", // Exclude all files in the .internal directory
  ],
  testMatch: ["**/tests/**/*.test.js"], // Ensure Jest matches test files correctly
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel to transform .js files
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"], // Ensure node_modules are not transformed
  testEnvironment: "node", // Use Node.js environment
};
