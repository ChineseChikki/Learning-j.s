// JavaScript Fundamentals – Part 2
// Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(23, 34, 27));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win 🏆 (${avgKoalas}vs. ${avgDolphins})`);
  } else {
    console.log("No team wins....");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(567, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
