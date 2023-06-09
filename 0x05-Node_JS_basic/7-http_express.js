const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
      const students = await countStudents(DATABASE); // eslint-disable-line
    res.end(`${students.join('\n')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(1245, () => {
});

module.exports = app;
