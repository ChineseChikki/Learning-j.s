const age = 15;
if (age >= 18) {
  console.log("Chikki can start driving license 🚕🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Chikki is too young. wait another ${yearsLeft} years`);
}

const birthYear = 2020;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//TYpe of conversion
const inputYear = "1967";
console.log(Number(inputYear) + 20);
console.log(Number(inputYear));
