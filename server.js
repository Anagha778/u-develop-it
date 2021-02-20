const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended : true }));
// parse incoming JSON data
app.use(express.json());

/*
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});*/

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});