const calcMean = (numbers) => {
  //if nums was passed but there was no number inside it. Example http://localhost:3000/mean?nums=
  if (nums.length === 0) return 0;
  //let divider gets you the total number of elements in the array that we're going to divide by
  let divider = numbers.length;
  //numbers map converts a string into an integer
  let nums = numbers.map(
    (value) => {
      return parseInt(value, 10);
    }
  );

  for (var i = 0; i <= numbers.length; i++) {
    if (isNaN(nums[i])) {
        return "error";
    }
}
  
  console.log(nums);

  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum)
  return sum / divider;

}
// From the classic forloop to the forEach() method,
//  various techniques and methods are used to iterate through datasets 
//  in JavaScript. One of the most popular methods is the .map() method. .map()
//   creates an array from calling a specific function on each item in the parent array. .map() 
//   is a non-mutating method that creates a new array as opposed to mutating methods, which only make changes
//    to the calling array.

module.exports = { calcMean, }







// /**
//  * Build a frequency counter object from an array
//  * @param {Array} arr any array
//  */
// function createFrequencyCounter(arr) {
//     return arr.reduce(function(acc, next) {
//       acc[next] = (acc[next] || 0) + 1;
//       return acc;
//     }, {});
//   }

//   /**
//    * Find the most common element in the array
//    * @param {Array} arr any array
//    */
//   function findMode(arr) {
//     let freqCounter = createFrequencyCounter(arr);

//     let count = 0;
//     let mostFrequent;

//     for (let key in freqCounter) {
//       if (freqCounter[key] > count) {
//         mostFrequent = key;
//         count = freqCounter[key];
//       }
//     }

//     return +mostFrequent;
//   }

//   /**
//    * Attempt to convert an array of strings to an array of numbers
//    * @param {Array} numsAsStrings array of strings
//    * @returns {Array|Error} an array or an error object
//    */
//   function convertAndValidateNumsArray(numsAsStrings) {
//     let result = [];

//     for (let i = 0; i < numsAsStrings.length; i++) {
//       let valToNumber = Number(numsAsStrings[i]);

//       if (Number.isNaN(valToNumber)) {
//         return new Error(
//           `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
//         );
//       }

//       result.push(valToNumber);
//     }
//     return result;
//   }

//   function findMean(nums){
//     if(nums.length === 0) return 0;
//     return nums.reduce(function (acc, cur) {
//       return acc + cur;
//     }) / nums.length
//   }

//   function findMedian(nums){
//     // sort and get the middle element

//     nums.sort((a, b) => a - b);

//     let middleIndex = Math.floor(nums.length / 2);
//     let median;

//     if (nums.length % 2 === 0) {
//       median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
//     } else {
//       median = nums[middleIndex];
//     }
//     return median
//   }



//   module.exports = {
//     createFrequencyCounter,
//     findMean,
//     findMedian,
//     findMode,
//     convertAndValidateNumsArray
//   };