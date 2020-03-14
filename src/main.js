import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Player } from './pandemic.js';


player1 = {
  roll: 0,
  grandTotal: 0
};

$(document).ready(function () {

  var sec = 0;
  function pad(val) { return val > 9 ? val : "0" + val; }
  setInterval(function () {
    $("#seconds").html(pad(++sec % 365) + "days");
    $("#minutes").html(pad(parseInt(sec / 365, 10)));
  }, 1000);

  $('#pandemic-form').submit(function (event) {
    event.preventDefault();
    newPlayer = new Player();
    newPlayer.startInfection();
    console.log(this.name)
    console.log(newPlayer.infectionLevel)
    $('#solution').text("test");
  });

