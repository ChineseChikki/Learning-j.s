function measureKelvin() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C. FIX
    value: Number(prompt("Degrees celsius:")),
  };
  // B. FIND
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}
// A: IDENTIFY
console.log(measureKelvin());
//The problem with this code is in number conversion. prompt works for string
