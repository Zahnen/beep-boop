// Business Logic
function beepBoop(inputNumber) {
  let roboCount =[];
  for(let i = 0; i <= inputNumber; i++) {
    
    let stringForm = i.toString();

    if (stringForm.includes("3")) {
    roboCount.push("Won't you be my neighbor?");
  } else if (stringForm.includes("2")) {
    roboCount.push("Boop!");
  } else if (stringForm.includes("1")) {
    roboCount.push("Beep!");
  } else {
    roboCount.push(i);
  }
}
  return roboCount
};
//UI Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#countTo").val());
    let roboSpeak = beepBoop(userInput);

    $("#roboSpeak").show();
    $("#roboSpeakText").append(roboSpeak.join(", "));
  });
});


/*
Describe: beepBoop Function

Test: It will return a range of numbers that count from zero by one up to the user's input 
Expect: (beepBoop(4).toEqual(0,1,2,3,4))

Test: "It will replace digits that include the number '1' with the string 'Beep!'"
Expect:(beepBoop(1).toEqual("Beep")

Test: "It will replace digits that include the number '2' with the string 'Boop!'"
Expect:(beepBoop(2).toEqual("Boop")

Test: "It will replace digits that include the number '3' with the string 'Won't you be my neighbor?'"
Expect:(beepBoop(3).toEqual("Won't you be my neighbor?")
*/

/*
Scratchpad:
    $("#results").show();
    $("#roboSpeak").append("Test")
    let countTo = parseInt($("input#formOne").val());
*/