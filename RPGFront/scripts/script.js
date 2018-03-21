var name;
var hp;
var atkPoints;
var defPoints;
var totalPoints;
var botType;
var player;
var enemy;
$(document).ready(function() {
  //IGNORE FOR NOW : DOES NOT WORK //

  /*var inp = document.getElementById('atkRange');
  inp.addEventListener("mousemove", function () {
    document.getElementById('atk').innerHTML = this.value;
  });
  console.log(this.value);
  var inp = document.getElementById('defRange');
  inp.addEventListener("mousemove", function () {
    document.getElementById('def').innerHTML = this.value;
  });
  $('.moreAtk').on('click', function() {

  });*/

  //you can stop ignoring now...

  //EvenListener on the "New game" button
  $('.init').on('click', function() {
    $.get('http://192.168.33.32:3000/init', function(data) {
      //Works only if API responds
      document.getElementById('start').style.display = "none";
      document.getElementById('lobby').style.display = "flex";
    });
  });
  //EvenListener on the "submit" button
  $('.submit').on('click', function() {
    creation(display);
    function display() {
      document.getElementById('lobby').style.display = "none";
      document.getElementById('field').style.display = "flex";
      console.log("3 " + player, enemy);
      $('.player').html(player);
      $('.enemy').html(enemy);
    }
  });
  $('.attack').on('click', function() {
    attack();
  });
  //Hero creation function
  function creation(callback) {
    //Get Hero stats user entered
    botType = document.getElementById('type').value;
    name = document.getElementById('name').value;
    hp = document.getElementById('hp').value;
    atkPoints = document.getElementById('atk').value;
    defPoints = document.getElementById('def').value;
    totalPoints = parseInt(atkPoints) + parseInt(defPoints);
    console.log(atkPoints, defPoints, totalPoints, botType);
    //Check if user correctly balanced his Hero
    if (totalPoints > 150) {
      alert('The amount of points in Attack and Defense cannot excess 150 points ! Please verify your configuration.');
    } else {
      //Send infos to API to Create Hero
      $.post('http://192.168.33.32:3000/create', {'name': name, 'hp': hp, 'atkPoints': atkPoints, 'defPoints': defPoints, 'botType': botType}).done(function(data) {
        player = "Name : " + data.player.name + ' ' + "HP : " + data.player.hp + ' ' + "Attack Points : " + data.player.atkPoints + ' ' + "Defense Points : " + data.player.defPoints;
        enemy = "Name : " + data.enemy.name + ' ' + "HP : " + data.enemy.hp + ' ' + "Attack Points : " + data.enemy.atkPoints + ' ' + "Defense Points : " + data.enemy.defPoints;
        callback();
      });
    }
  }
  //game function
  function attack() {
    //debugger;
    $.post('http://192.168.33.32:3000/attack');
    debugger;
  }
  //$('.start').on('click', game);
});
