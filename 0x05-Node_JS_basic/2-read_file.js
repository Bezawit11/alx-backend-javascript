/**
 * displays message on the STDOUT.
 */
var fs = require('fs');
const countStudents = (path) => {
  try {
  fs.readFileSync(path, function(err, data) {
  console.log('success');
  });
  } catch (err) {
  throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
