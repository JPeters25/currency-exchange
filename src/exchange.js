export default class CurrencyExchange {
  static getExchange(country1, country2, amount) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${country1}/${country2}/${amount}`;
      request.onload = function () {
        if (this.status === 200) { 
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}