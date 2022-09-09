// values and variables
let country = 'Nigeria';
let continent = 'Africa';
let population = 2.5;

console.log(country, continent, population);

// Data types
const isIsland = true;
let language;
console.log(isIsland, language);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = 'English';
// const  country = 'Nigeria'
//  const continent = 'Africa';
// let population =2.5;
//  const isIsland = false;
//  isIsland = true

// basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  ' ' +
  'is in' +
  ' ' +
  continent +
  ',' +
  'and its' +
  ' ' +
  population +
  ' ' +
  'million people speak' +
  ' ' +
  language;
console.log(description1);

//Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
console.log(description);
