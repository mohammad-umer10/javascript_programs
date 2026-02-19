function checkEvenOdd(number) {
    if (number % 2 == 0) {
        return "Even number";
    }
    else{
        return "Odd number";
    }
}

let ans = checkEvenOdd(4);
console.log(ans);