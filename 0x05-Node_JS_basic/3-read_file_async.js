/**
 * displays message on the STDOUT.
 */
/* eslint-disable no-plusplus, guard-for-in, no-useless-concat */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      let s = data.split('\n');
      s.shift();
      s.pop();
      s = s.reverse();
      console.log('Number of students:', s.length);
      const dict = {};
      for (let i = 1; i <= s.length; i++) {
        const g = s[s.length - i].split(',');
        const m = g[0];
        if (dict[g[g.length - 1]] === undefined) {
          const k = [m];
          dict[g[g.length - 1]] = k;
        } else {
          const l = dict[g[g.length - 1]];
          l.push(m);
          dict[g[g.length - 1]] = l;
        }
      }
      for (const key in dict) {
        console.log(`Number of students in ${key}: ${dict[key].length}.` + ` List: ${dict[key].join(', ')}`);
      }
      resolve(true);
    });
  });
}
module.exports = countStudents;
