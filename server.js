const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended : true }));
// parse incoming JSON data
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

const db = require('./db/database');

/*
// GET a single candidate
db.get(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if(err) {
    console.log(err);
  }
  console.log(row);
});

// Delete a candidate
db.run(`DELETE FROM candidates WHERE id = ?`, 1, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result, this, this.changes);
});*/

/*// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
// ES5 function, not arrow function, to use this
db.run(sql, params, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log(result, this.lastID);
});*/


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