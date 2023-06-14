/**
 * displays message on the STDOUT.
 */
const fs = require('fs');
const countStudents = (path) => {
  try {
  const data =  fs.readFileSync(path, 'utf-8');
  console.log('data', data);
  let s = data.split('\n');
  s.shift()
  s.pop()
  s = s.reverse()
  console.log('Number of students: ', s.length);
  var dict = {};
  for (let i = 1; i <= s.length; i++) {
    let g = s[s.length - i].split(',');
    var m = g[0];
    if (dict[g[g.length - 1]] === undefined) {
      var k = [m]
      dict[g[g.length - 1]] = k;
    }
    else {
      var l = dict[g[g.length - 1]];
      l.push(m)
      dict[g[g.length - 1]] = l;
    }
  }
  for(var key in dict) {
   console.log('Number of students in ' + key + ": " + dict[key] + '.');
}
  } catch (err) {
  throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
