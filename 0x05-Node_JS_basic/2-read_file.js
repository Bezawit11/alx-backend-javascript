/**
 * displays message on the STDOUT.
 */
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    let s = data.split('\n');
    s.shift();
    s.pop();
    s = s.reverse();
    console.log('Number of students:', s.length);
    const dict = {};
    for (let i = 1; i <= s.length; i++) { // eslint-disable no-plusplus
      const g = s[s.length - i].split(',');
      const m = ` ${g[0]}`;
      if (dict[g[g.length - 1]] === undefined) {
        const k = [m];
        dict[g[g.length - 1]] = k;
      } else {
        const l = dict[g[g.length - 1]];
        l.push(m);
        dict[g[g.length - 1]] = l;
      }
    }
    for (const key in dict) { // eslint-disable guard-for-in
      console.log(`Number of students in ${key}: ${dict[key].length}.` + ` List:${dict[key]}`); // eslint-disable no-useless-concat
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
