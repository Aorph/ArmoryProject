const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
class Hero {
  constructor(name, hp, attackPoints, magicPoints) {
    this.hp = 0;
  }
}
app.get('/init', function (req, res) {
  res.send(true);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
