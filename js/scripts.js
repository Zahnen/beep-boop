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

    $("#roboSpeak").hide();
    $("#roboSpeakImage").hide();
    $("#roboSpeak").fadeIn();
    $("#roboSpeakImage").fadeIn();
    $("#roboSpeakText").text(roboSpeak.join(", "));
  });
});
