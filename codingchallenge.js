// JavaScript Fundamentals – Part 1
// Coding Challenge #1.0

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markBMI = markMass/markHeight**2;
// let johnBMI = johnMass/johnHeight**2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI)

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//Coding Challenge #3
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI}!)`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

// JavaScript Fundamentals – Part 1
// Coding Challenge #3.0

// const dolphinsScore = (96 + 108 + 89)/3;
// const koalasScore = (88+ 91+110)/3;
// console.log(dolphinsScore, koalasScore);
//Using conditional statement to check for the winner, loser and draw btw the two teams
// if(dolphinsScore > koalasScore){
//   console.log('Dolphins win the trophy 🏆');
// }else if(koalasScore > dolphinsScore){
//   console.log('Koalas win the trophy 🏆');
// }else if(dolphinsScore === koalasScore){
//   console.log('Dolphins and Koalas played Draw match');
// }//a simple else would be fine because if the above two condition no happen then its draw
// const teamDolphins = dolphinsScore;
// const teamKoalas = koalasScore;
// const aveTeamScores = dolphinsScore > koalasScore;
// console.log(aveTeamScores);

////BONUS 1 AND 2
// const dolphinsScore = (97 + 101 + 112)/3;
// const koalasScore = (97 + 101 + 112)/3;
const dolphinsScore = (109 + 95 + 123) / 3;
const koalasScore = (19 + 95 + 106) / 3;
console.log(dolphinsScore, koalasScore);
if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  dolphinsScore === koalasScore &&
  dolphinsScore >= 100 &&
  koalasScore >= 100
) {
  console.log("Both team wins 🍕");
} else {
  console.log("No team wins 😥😥");
}

// JavaScript Fundamentals – Part 1
// Coding Challenge #4.0
//Building Tip Calculator
// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
