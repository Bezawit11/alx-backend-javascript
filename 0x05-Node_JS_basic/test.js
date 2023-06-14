const fs = require('fs');
fs.readFile("database.csv", 'utf-8', (err, data) => {
  if (err) {
    reject(new Error('Cannot load the database'));
  }
  console.log(data);
});
