function totalAndAverage(English, Math, Computer, Urdu, sindhi) {
  let total = English + Math + Computer + Urdu + sindhi;
  let average = total / 5;                      
  return {total, average};     
}

let result =totalAndAverage(80, 70, 90, 60, 50);

console.log("Total Marks: " + result.total);
console.log("Average Marks: " + result.average);

