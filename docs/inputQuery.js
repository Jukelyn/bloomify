const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const jsonFilePath = './data/userInputs.json';

app.post('/submit', (req, res) => {
  // Read the existing JSON file
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading JSON file');
      return;
    }

    try {
      // Parse the JSON data into a JavaScript object
      const jsonData = JSON.parse(data);

      // Append the new data from the form to the array
      jsonData.push(req.body);

      // Write the updated data back to the JSON file
      fs.writeFile(jsonFilePath, JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error writing JSON file');
        } else {
          res.send('Data appended to JSON file');
        }
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing JSON data');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
