// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
/* const devtools = require('@vue/devtools');
devtools.connect();
console.log('from renderer'); */
const f = require('financial');
//console.log(f.pmt(0.035 / 12, 20 * 12, 3500000));
console.log(f.pmt(0.05 / 12, 20 * 12, -1000000, 5000000, f.PaymentDueTime.Begin));

