function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function laugh() {
  console.log("haha!");
}

function cry() {
  console.log("boohoo!");
}

repeatThreeTimes(cry); // boohoo! boohoo! boohoo!

function repeatNTimes(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatNTimes(laugh, 3); // haha! haha! haha!
repeatNTimes(cry, 2); // boohoo! boohoo!

function pickOne(func1, func2) {
  let rand = Math.random();
  if (rand < 0.5) {
    func1();
  } else {
    func2();
  }
}

pickOne(laugh, cry); // haha! or boohoo!

// Using Build in functions

function alertMe(){
  console.log("Alarm goes on!!")
}

setTimeout(alertMe,2000)

// Based on events

function alertNow(){
  alert("You have clicked Me!")
}

const btn = document.querySelector("button")
btn.addEventListener('click', alertNow)
