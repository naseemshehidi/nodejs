const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

fs.readFile('welcome.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
