// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 59
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function(temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
    
//     if (curTemp < min) min = curTemp;
//   }

//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// // Now receaving two arrays
// const calcTempAmplitudeNew = function(t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
    
//     if (curTemp < min) min = curTemp;
//   }

//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures);
// console.log(amplitudeNew);


// 61
// const measureKelvin = function() {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degrees celsius: ")),
//     value: 10,
//   }

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function(t1, t2) {
//   const temps = t1.concat(t2);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
    
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);


// 62
// const printForecast = function(tempes) {
//   let str = '';
//   for (let i = 0; i < tempes.length; i++) {
//     str += `${tempes[i]}°C in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// }

// printForecast([17, 21, 23]);
// console.log('==============');
// printForecast([12, 5, -5, 0, 4]);