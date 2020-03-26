const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors());

app.get('/users', function (request, response) {

  fs.readFile('users.json', (err, userData) => {
    if (err) throw err;
    response.send(userData);
  });
});

app.post('/user-register', function (request, responce) {
  console.log('Пришли данные с клиента', request.body);

  fs.readFile('users.json', 'utf-8', function (err, fileData) {
    if (err) throw err;
    usersJsonFile = fileData;


    let newUserData = JSON.parse(request.body);
    let usersJsonData = JSON.parse(usersJsonFile);
    usersJsonData.table.push({
      username: newUserData.table[0].username,
      email: newUserData.table[0].email
    });

    users = JSON.stringify(usersJsonData);

    fs.writeFile('users.json', users, 'utf-8', function (err) {
      if (err) throw err;
    });
    console.log('Данные записаны');
  });
});

app.listen(80, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});