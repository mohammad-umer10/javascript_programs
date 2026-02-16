function checkEligibitily(age) {
    let eligibitily = age;
    if (age >= 18) {
        return "you are eligibile";
    }
    else{
        return "you are not eligible";
    }
}

    let x = checkEligibitily(19);
    console.log(x);