import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

$(document).ready(function() {
  $('#convert-currency').click(function() {
    const amount = $('#dollar-amount').val();
    const country1 = $('#currency-select1').val();
    const country2 = $('#currency-select2').val();
    $('#dollar-amount').val("");
    $('#currency-select1').val("");
    $('#currency-select2').val("");
    // clearFields();
    let promise = CurrencyExchange.getExchange(country1,country2, amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showConversion').text(`${amount} ${country1}= ${body.conversion_result} ${country2}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showConversion').text("");
    });
  });
});