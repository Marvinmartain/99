const express = require('express');
const app = express();

const startingBugs = 99;

app.get('/', (req, res) => {
  const message = `99 little bugs in the code<br><a href="/bugs/${startingBugs}">Take one down, patch it around</a>`;
  res.send(message);
});

app.get('/bugs/:numBugs', (req, res) => {
  let numBugs = parseInt(req.params.numBugs);
  
  // Update the number of bugs randomly
  const rand = Math.random();
  if (numBugs > 0 && rand < 0.3) {
    numBugs++;
  } else if (numBugs > 0 && rand < 0.6) {
    numBugs--;
  }
  
  // Construct the message based on the number of bugs
  let message = `${numBugs} little bugs in the code<br>`;
  if (numBugs > 0) {
    message += `<a href="/bugs/${numBugs-1}">Take one down, patch it around</a>`;
  } else {
    message += `No more bugs in the code.<br><a href="/">Start over</a>`;
  }
  
  // Display the message
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});




