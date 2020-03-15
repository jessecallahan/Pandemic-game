import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Game } from './pandemic.js';




$(document).ready(function () {

  //clock part
  var sec = 0;
  function pad(val) { return val > 9 ? val : "0" + val; }
  setInterval(function () {
    $("#seconds").html(pad(++sec % 365) + " days");
    $("#minutes").html(pad(parseInt(sec / 365, 10)) + " years ");
  }, 1000);

  //part that doesnt work
  let infectionLevel = 0
  let newGame = new Game(infectionLevel)
  newGame.startInfection();

  //first line of defense: cure
  $("#heal2Button").click(function () {
    event.preventDefault();
    newGame.cure();
    $("#tendayinfectionlevel3").append(" " + (newGame.infectionLevel) + "%")
    setInterval(function () {
      $("#tendayinfectionlevel3").append(" " + (newGame.infectionLevel) + "%")
    }, 10000);
    $('#heal2Button').hide();

  });

  //first line of defense: doctors
  var counter = 0;
  $("#heal1Button").click(function () {
    event.preventDefault();
    newGame.doctor1();
    $("#tendayinfectionlevel2").append((newGame.infectionLevel) + "%")
    counter += 1;
    if (counter > 4) {
      $('#heal1Button').hide();
    }
  });



  // $('#heal1').show();
  // $('#hea2').hide();

  console.log(newGame.infectionLevel)
  //show infection level every one second, end game if infection goes to 100 or more, reset html
  setInterval(function () {
    $("#infectionlevel").html(" " + newGame.infectionLevel + "% of Earth infected")
    if (newGame.infectionLevel >= 100) {
      return alert('Game Over') ? "" : location.reload();
    }
  }, 1000);

  //shows first line of defense
  setTimeout(function () {
    $('#heal1').show();
    $('#tenday').show();
  }, 10000);

  //ten day counter
  setInterval(function () {
    $("#tendayinfectionlevel").append(" " + newGame.infectionLevel + "%")
  }, 10000);

});
