// •	Takes a string input
// •	Returns the reversed string
// Example:
// Input: "JavaScript"
// Output: "tpircSavaJ"
// Bonus:
// •	Check if the string is Palindrome


let text = "JavaScript";
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log("Input:", text);
console.log("Reversed:", reversed);

if (text === reversed) {
  console.log("Palindrome: Yes");
} else {
  console.log("Palindrome: No");
}

