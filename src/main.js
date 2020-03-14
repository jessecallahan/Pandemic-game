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


  // $('#heal1').show();
  // $('#hea2').hide();


  //show infection level every three seconds, end game if infection goes to 100 or more, reset html
  setInterval(function () {
    document.getElementById("clickMe").onclick = function () { newGame.infectionLevel - 1 };
    $("#infectionlevel").html(newGame.infectionLevel + "% of Earth infected")
    if (newGame.infectionLevel >= 100) {
      return alert('Game Over') ? "" : location.reload();
    }
  }, 1000);

  setTimeout(function () {
    $('#heal1').show();
  }, 10000);


  // setInterval(function () {
  //   $().submit(function (event) {
  //     event.preventDefault();
  //     $("#infectionlevel").html((newGame.infectionLevel - 1) + "% of Earth infected")
  //   }, 1000);
  // }


});
