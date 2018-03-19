var name;
var hp;
var atkPoints;
var defPoints;
var totalPoints;
var botType;
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
  $('#start').on('click', function() {
    $.get('http://192.168.33.32:3000/init', function(data) {
      //Works only if API responds
      document.getElementById('start').style.display = "none";
      document.getElementById('lobby').style.display = "flex";
    });
  });
  $('.start').on('click', function() {
    creation();
  })
  function creation() {
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
        console.log(data);
        document.getElementById('lobby').style.display = "none";
        document.getElementById('stats').style.display = "flex";
        $('.stats').html("Name : " + data.name + ' ' + "HP : " + data.hp + ' ' + "Attack Points : " + data.atkPoints + ' ' + "Defense Points : " + data.defPoints);
      });
    }
    debugger;
  }
  //$('.start').on('click', game);
});
