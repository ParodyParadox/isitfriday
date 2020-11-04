console.log("Hello Royals!");

const today = new Date();

function checkForFriday(currentDate) {
  if(currentDate.getDay() === 5) {
    document.querySelector("#answer").innerHTML = 'YES!';
  } else {
    document.querySelector("#answer").innerHTML = 'NO :(';
  }
}

checkForFriday(tody);
