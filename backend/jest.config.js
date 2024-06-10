// // jest.config.js
// module.exports = {
//     transform: {
//       "^.+\\.jsx?$": "babel-jest"
//     }
//   };
  
// jest.config.js
export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",  // Transform using Babel for JS/JSX files
  },
  // extensionsToTreatAsEsm: ['.js'],  // Treat these extensions as ES modules
  testEnvironment: 'node',  // Use the Node environment for testing
};
