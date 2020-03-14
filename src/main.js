import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Player } from './pandemic.js';




$(document).ready(function () {

  //clock part
  var sec = 0;
  function pad(val) { return val > 9 ? val : "0" + val; }
  setInterval(function () {
    $("#seconds").html(pad(++sec % 365) + "days");
    $("#minutes").html(pad(parseInt(sec / 365, 10)));
  }, 1000);

  //part that doesnt work
  let infectionLevel = 0
  let newPlayer = new Player(infectionLevel)
  newPlayer.startInfection();
  // newPlayer.firstHelpPack();



  //show infection level every three seconds, end game if infection goes to 100 or more, reset html
  setInterval(function () {
    $("#infectionlevel").html(newPlayer.infectionLevel + "% of Earth infected")
    if (newPlayer.infectionLevel >= 100) {
      return alert('Game Over') ? "" : location.reload();
    }
  }, 1000);

  //




});
