const express = require('express');
const app = express();
const class = require('');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
class Hero {
  constructor(name, hp, attackPoints, magicPoints) {
    this.hp =
  }
}
app.get('/init', function (req, res) {

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
