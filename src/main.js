import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Game } from './pandemic.js';




$(document).ready(function () {

  // day clock 
  var sec = 0;
  function pad(val) { return val > 9 ? val : "0" + val; }
  setInterval(function () {
    $("#seconds").html(pad(++sec % 365) + " days");
    $("#minutes").html(pad(parseInt(sec / 365, 10)) + " years ");
  }, 1000);

  //object constructor/game start
  let infectionLevel = 0
  let newGame = new Game(infectionLevel)
  newGame.startInfection();

  //first line of defense: cure
  $("#cure1Button").click(function () {
    event.preventDefault();
    newGame.cure();
    $('#cure1Button').hide();
  });

  //first line of defense: doctors
  var counter = 0;
  $("#doctor1Button").click(function () {
    event.preventDefault();
    newGame.doctor1();
    $("#doctor1level").append(newGame.infectionLevel + "% ")
    counter += 1;
    if (counter > 4) {
      $('#doctor1Button').hide();
    }
  });
  //first line of defense: quarantine
  $("#quarantine1Button").click(function () {
    event.preventDefault();
    newGame.quarantineClock();
    $('#quarantine1Button').hide();
  });

  //second cure

  $("#cure2button1").click(function () {
    event.preventDefault();
    $('#cure2').hide();
    $('.cure2Show1').show();
    newGame.vaccineClock();
  });

  $("#cure2Button2").click(function () {
    event.preventDefault();
    newGame.cure2();
    $('#cure2').hide();
    $('.cure2Show2').show();
  });

  $("#vaccineButton").click(function () {
    event.preventDefault();
    newGame.vaccine();
    $('#vaccineButton').hide();
    $('.cure2Show1').show();
  });

  // second doctor
  var counter1 = 0;
  $("#doctor2Button").click(function () {
    event.preventDefault();
    newGame.doctor1();
    $("#doctor2level").append(newGame.infectionLevel + "% ")
    counter1 += 1;
    if (counter1 > 9) {
      $('#doctor2Button').hide();
    }
  });





  //infection clock 
  setInterval(function () {
    $("#news_report").show();
    $("#infectionlevel").html(newGame.infectionLevel + "% of Earth infected")
    //Game Over
    if (newGame.infectionLevel >= 100) {
      return alert('Game Over') ? "" : location.reload();
    }
    if (newGame.infectionLevel < 0) {
      return alert('You win!') ? "" : location.reload();
    }
  }, 1000);

  //shows lines of defense
  setTimeout(function () {
    $('#heal1').show();
    $('#tenday').show();
  }, 10000);

  setTimeout(function () {
    $('#heal2').show();
    $(".cure2Show1").hide();
    $(".cure2Show2").hide();
  }, 30000);

  //new report timeouts

  setTimeout(function () {
    $("#news_report1").show();
  }, 5000);

  setTimeout(function () {
    $("#news_report2").show();
  }, 15000);

  setTimeout(function () {
    $("#news_report3").show();
    $("#news_report2").hide();
    $("#news_report1").hide();
  }, 100000);

  setTimeout(function () {
    $("#news_report4").show();
  }, 105000);

  setTimeout(function () {
    $("#news_report5").show();
    $("#news_report3").hide();
    $("#news_report4").hide();
  }, 125000);

  setTimeout(function () {
    $("#news_report6").show();
  }, 140000);


  //ten day counter
  setInterval(function () {
    $("#tendayinfectionlevel").append(" " + newGame.infectionLevel + "%")
  }, 10000);




});
