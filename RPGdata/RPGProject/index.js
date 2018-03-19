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
  //bot creation
  if (req.body.botType == "tank") {
    var bot = new Hero("BOT tank", "100", "0", "150");
  } else if (req.body.botType == 'fighter') {
    var bot = new Hero("BOT fighter", "100", "75", "75");
  } else {
    var bot = new Hero("BOT assasin", "100", "150", "0");
  }
  console.log(newHero, bot);
  res.send(newHero, bot);
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
