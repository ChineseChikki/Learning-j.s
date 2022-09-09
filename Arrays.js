const years = [1991, 2007, 1969, 1989, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Looping Backward
const jonas = [
  'Jonas',
  'DIke',
  2037 - 1991,
  'teacher',
  ['Jane', 'Lucy', 'Nma'],
  true,
];
//0,1,.......4
//4,3,.......0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

//using a for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep} `);
}

//using a while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

//using while loop without a counter[i]
// let dice = Math.trunc(Math.random() + 6) + 1;
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() + 6) + 1;
//   if (dice === 6) {
//     console.log('Loop is about to End');
//   }
//   dice++;
// }
