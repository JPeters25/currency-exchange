

//   dollarExchange(){
//     let request = new XMLHttpRequest();
//     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         /* eslint-disable */
//       getElements(response);
//         /* eslint-enable*/
//       }
//     };
//     request.open("GET", url, true);
//     request.send();
//   }
// }