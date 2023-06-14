/**
 * displays message on the STDOUT.
 */
var fs = require('fs');
var path = process.cwd();
const countStudents = (rpath) => {
  try {
  fs.readFileSync(path + rpath, function(err, data) {
  console.log(data);
  });
  } catch (err) {
  throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
