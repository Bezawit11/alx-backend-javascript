/**
 * displays message on the STDOUT.
 */
const fs = require('fs');
const countStudents = (path) => {
  try {
  const data =  fs.readFileSync(path, 'utf-8');
  console.log('data', data);
  let s = data.split('\n');
  console.log('Number of students: ', s.length - 2);
  var dict = {};
  for (let i = 1; i <= s.length; i++) {
    let g = s[s.length - i].split(',');
    if (dict[g[g.length - 1]] === undefined) {
      dict[g[g.length - 1]] = 1;
    }
    else {
      dict[g[g.length - 1]] = dict[g[g.length - 1]] + 1;
    }
  }
  for(var key in dict) {
   console.log(key + " : " + dict[key]);
}
  } catch (err) {
  throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
