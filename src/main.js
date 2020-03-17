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
    $('#news_report1').text("- Vaccine 1 implemented on Earth! The world rejoices!");
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
      $('.doctor2').hide();
      $('.doctor2plusShow').show();
    }
  });
  //second doctor plus feature
  $("#bonusButton").click(function () {
    $("form#animalForm").submit(function (event) {
      event.preventDefault();
      let a = $("input:radio[name=optradio]:checked").val();
      $("#animalLevel").text(a);
    });
    $('#animalQuestion').hide();
    $('#animalAnswer').show();
  });

  //third defense, second quaranteen

  $("#quarantine2Button").click(function () {
    event.preventDefault();
    $('#supDoc').hide();
    $('#cure3').hide();
    $('#quarantine2').show();
    newGame.quarantineClock2();
    $('#animalQuestion').hide();
  });

  $("#supDocButton").click(function () {
    event.preventDefault();
    $('#supDoc').show();
    $('#cure3').hide();
    $('#quarantine2').hide();
  });

  var counter2 = 0;
  $("#ss1").click(function () {
    event.preventDefault();
    newGame.doctor1();
    newGame.doctor2();
    $("#cure3level").append(newGame.infectionLevel + "% ")
    counter2 += 1;
    if (counter2 > 14) {
      $('#ss1').hide();
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

  setTimeout(function () {
    $('#heal3').show();
  }, 150000);

  //new report timeouts

  setTimeout(function () {
    $("#news_report1").text("- A pandemic has started on Earth!");
  }, 5000);

  setTimeout(function () {
    $("#news_report2").text("- The ten day response is now in order");
  }, 15000);

  setTimeout(function () {
    $("#news_report1").text("- 100 days since Pandemic started");
  }, 100000);

  setTimeout(function () {
    $("#news_report2").text("- Stock Market crashs.");
  }, 105000);

  setTimeout(function () {
    $("#news_report1").text("- 150 day response is being organized");
  }, 125000);

  setTimeout(function () {
    $("#news_report6").text("- Stand by");
  }, 140000);


  //ten day counter
  setInterval(function () {
    $("#tendayinfectionlevel").append(" " + newGame.infectionLevel + "%")
  }, 10000);




});
