const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
class Hero {
  constructor(name, hp, attackPoints, defPoints) {
    this.name = name;
    this.hp = hp;
    this.attackPoints;
    this.magicPoints = defPoints;
  }
}
app.get('/init', function (req, res) {
  res.send(true);
});
app.post('/create', function (req, res) {
  console.log(req.body);
  var newHero = new Hero(req.body.name, req.body.hp, req.body.atkPoints, req.body.defPoints);
  console.log(newHero);
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
