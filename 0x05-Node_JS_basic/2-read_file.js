/**
 * displays message on the STDOUT.
 */
const fs = require('fs');
const countStudents = (path) => {
  try {
  const data =  fs.readFileSync(path, 'utf-8');
  console.log('data', data);
  } catch (err) {
  throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
