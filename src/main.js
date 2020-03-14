import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Player } from './pandemic.js';

$(document).ready(function () {
  $('#pandemic-form').submit(function (event) {
    event.preventDefault();
    let player1 = new Player()
    console.log(player1.infectionLevel)
    $('#solution').text(player1.infectionLevel);
  });
});