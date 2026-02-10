function calculateTotal(English, Math, Computer, Urdu, sindhi) {
  let total = English + Math + Computer + Urdu + sindhi;
  return total;
}

let totalMarks = calculateTotal(80, 70, 90, 60, 50);
console.log("Total Marks: " + totalMarks);