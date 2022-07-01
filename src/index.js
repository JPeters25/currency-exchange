import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Exchange from '.src/exchange.js';


$(document).ready(function() {
  $('#convert-currency').click(function() {
    const amount = $('#dollar-amount').val();
    $('#dollar-amount').val("");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR/${amount}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        /* eslint-disable */
        getElements(response);
        /* eslint-enable*/
      }
    };
    request.open("GET", url, true);
    request.send();
    /* eslint-disable */
    function getElements(response) {
      $('.showUSD').text(`USD = $ ${amount} is ${response.conversion_result}`);
    }
    /* eslint-enable*/
  });
});

