function repeatThreeTimes(func) {
  func();
  func();
  func();
}

repeatThreeTimes(function laugh() {
  console.log("haha!");
}); // haha! haha! haha!

repeatThreeTimes(function () {
  console.log("boohoo!");
}); // boohoo! boohoo! boohoo!

function repeatNTimes(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatNTimes(function () {
  console.log("haha!");
}, 3); // haha! haha! haha!

function pickOne(func1, func2) {
  let rand = Math.random();
  if (rand < 0.5) {
    func1();
  } else {
    func2();
  }
}

pickOne(function () {
  console.log("haha!");
}, function () {
  console.log("boohoo!");
}); // haha! or boohoo!

// Using Build in functions

function alertMe(){
  console.log("Alarm goes on!!")
}

setTimeout(function (){
  console.log("Alarm goes on!!")
},2000)

// Based on events
const btn = document.querySelector("button")
btn.addEventListener('click', function(){
  alert("You have clicked!")
})