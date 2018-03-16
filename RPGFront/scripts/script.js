var atkPoints;
var defPoints;
var totalPoints;
$(document).ready(function() {
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
  $('.start').on('click', function() {
    $.get('http://192.168.33.32:3000/init', function(data) {
      document.getElementById('lobby').style.display = "none";
      document.getElementById('boardGame').style.display = "flex";
    });
    creation();
  });
  function creation() {
    atkPoints = document.getElementById("atk").value;
    defPoints = document.getElementById("def").value;
    totalPoints = parseInt(atkPoints) + parseInt(defPoints);
    console.log(atkPoints, defPoints, totalPoints);
    pointsCheck();
    if (pointsCheck() == false) {
      alert('The amount of points in Attack and Defense cannot excess 150 points ! Please verify your configuration.')
    }
    debugger;
  }
  function pointsCheck() {
    if (totalPoints > 150) {
      return false
    } else {
      return true
    }
  }
  //$('.start').on('click', game);
});
