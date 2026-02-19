function checkguess(secret, guess) {
  let secretnum = Number(secret);
  if (secretnum == guess) {
    return "Correct!";
  }else if (secretnum > guess) {
    return "Too low";
  }else{
    return "Too high"
  }
}

let result = checkguess(1, 7);
console.log(result);
  