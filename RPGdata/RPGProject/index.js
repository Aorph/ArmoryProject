const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//Hero class creation
class Hero {
  constructor(name, hp, atkPoints, defPoints) {
    this.name = name;
    this.hp = hp;
    this.atkPoints = atkPoints;
    this.defPoints = defPoints;
  }
}
//Initialisation Route
app.get('/init', function (req, res) {
  res.send(true);
});
//Hero creation
app.post('/create', function (req, res) {
  var newHero = new Hero(req.body.name, req.body.hp, req.body.atkPoints, req.body.defPoints);
  console.log(newHero);
  res.send(newHero);
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
