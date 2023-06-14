/**
 * displays message on the STDOUT.
 */
var fs = require('fs');
const countStudents = (path) => {
  try {
  fs.readFileSync(path, function(err, data) {
  console.log(data);
  });
  } throw (err) {
  console.log('Cannot load the database');
  }
};
module.exports = countStudents;
