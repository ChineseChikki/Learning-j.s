//Comparing using 2 conditional operators
// const hasDriversLicense = false; //A
// const hasGoodVision = true; //B

// if(hasDriversLicense || hasGoodVision){
// console.log('Chikki can drive');
// }else{
//   console.log(`Chikki can't drive, let Nma drive`)
// }

//Comparing using 3 conditional operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = true; //C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Chikki can drive");
} else {
  console.log(`Chikki can't drive, let Nma drive`);
}
