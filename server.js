const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1 style= "color: darkred"> Welcome to Hot Restaurant!</h1>');
});



const reservations = [
    {
      table: 1,
      id: 34,
      name: 'jess',
      email: "jess@jess.com",
      phone: 5557828888,

    }];

const waitList = [ {
    table: 1,
      id: 34,
      name: 'jess',
      email: "jess@jess.com",
      phone: 5557828888,
}];


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));


app.get('/api/tables', (req, res) => res.json(reservations));
app.get('/api/waitlist', (req, res) => res.json(waitList));





app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});