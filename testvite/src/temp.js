// let arr = [40, 15, 60, 2, 12];

// let inkm = arr.map((number) => number * 1.6);
// let kmbelow20 = inkm.filter((number) => number < 20);
// let totalkm = kmbelow20.reduce((start, end) => start + end);
// let mathround = Math.round(kmbelow20.reduce((start, end) => start + end));
// let mathceil = Math.ceil(kmbelow20.reduce((start, end) => start + end));
// console.log(arr);
// console.log(inkm);
// console.log(kmbelow20);
// console.log(totalkm);
// console.log(mathround);
// console.log(mathceil);
// console.log(arr, inkm, kmbelow20, totalkm, mathround, mathceil);

let ages = [3, 12, 18, 20, 30, 45, 60, 70];

let agesquared = ages.map((value) => value * value);
// console.log(agesquared);

let adults = ages.filter((value) => value >= 18);
// console.log(adults);

let averages = adults.reduce((accur, value) => accur + value);
// console.log(averages, averages / adults.length);
console.log(ages);

console.log(ages.includes(4));
