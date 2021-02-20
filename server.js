const express = require('express');
const PORT = process.env.PORT || 3000;

const sqlite3 = require('sqlite3').verbose();
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended : true }));
// parse incoming JSON data
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the election database.');
});

/*
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});*/

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});