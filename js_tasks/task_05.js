//  Valid:
// test@gmail.com
// hello123@yahoo.com
// Invalid:
// abc.com
// @test.com

function validateEmail(email) {
  let pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

let email = "test@gmail.com";

if (validateEmail(email)) {
  console.log("Valid Email");
} else {
  console.log("Invalid Email");
}
