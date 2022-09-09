const day = "sunday";
switch (day) {
  case "monday":
    console.log("Write my to-do-list");
    console.log("Finish my code assignment");
    break;
  case "tuesday":
    console.log("write 100 lines of code and upload on your git");
    break;
  case "wednesday":
  case "thursday":
    console.log("Attend your group meeting");
    break;
  case "friday":
    console.log("watch youtube video on MongoDB");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy your weekend and take a walk");
    break;
  default:
    console.log("you put a wrong day!!");
}

// Conditional Ternary Operator
//FIRST METHOD
const aged = 13;
aged >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I will take water 💧🥤");
console.log(aged);
//SECOND METHOD BOTH WORKS
// const aged = 13;
// const drink = aged >= 18 ? "wine🍷" : "water💧";
// console.log(drink);
