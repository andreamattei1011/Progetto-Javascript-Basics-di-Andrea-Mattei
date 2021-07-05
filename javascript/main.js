let startingNumber = 0;

function increaseBtn() {

  var counter = document.getElementById("counter");

  startingNumber += 1;
  counter.innerHTML = startingNumber;

}

function decreaseBtn() {

  var counter = document.getElementById("counter");

  startingNumber -= 1;
  counter.innerHTML = startingNumber;

}