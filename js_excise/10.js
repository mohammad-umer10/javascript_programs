function removeSpace(text) {
  return text.replaceAll(' ', '');
}

let sentence ="hello world";
let result = removeSpace(sentence);
console.log(result);