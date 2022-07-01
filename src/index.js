import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Exchange from '.src/exchange.js';


$(document).ready(function() {
  $('#convert-currency').click(function() {
    const amount = $('#dollar-amount').val();
    const country1 = $('#currency-select1').val();
    const country2 = $('#currency-select2').val();
    $('#dollar-amount').val("");
    $('#currency-select1').val("");
    $('#currency-select2').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const rate = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${country1}/${country2}/${amount}`;
      request.onload = function () {
        if (this.status === 200) { 
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", rate, true);
      request.send();
    });
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showUSD').text(`${amount} ${country1}= ${body.conversion_result} ${country2}`);
      $('.showErrors').text("");
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showUSD').text("");
    });
  });
});
