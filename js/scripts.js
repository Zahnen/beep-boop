function beepBoop(inputNumber) {
  let countTo = inputNumber
  let roboCount =[];

  for (let i = 0; i <= countTo; i++) {
    roboCount.push(i);
  }
  return roboCount;
}





// let countTo = parseInt($("input#formOne").val());



/*
Test: It will return a range of numbers that count from zero by one up to the user's input 
Expect: (beepBoop(4).toEqual(0,1,2,3,4))

Test: "It will replace digits that include the number '1' with the string 'Beep'"
Expect:(beepBoop(1).toEqual("Beep")

Test: "It will replace digits that include the number '2' with the string 'Boop'"
Expect:(beepBoop(2).toEqual("Boop")

Test: "It will replace digits that include the number '3' with the string 'BZZBZZRKKKKK'"
Expect:(beepBoop(3).toEqual("BZZBZZRKKKKK")

Test:
Expect:

Test:
Expect

Test:
Expect

Test:
Expect

Test:
Expect

*/