const clicker = document.getElementById("clicker")
clicker.oninput = function(){
    console.log("Range Moved!!")
}

function onme(){
    alert("on me")
}

clicker.addEventListener('click', function(){
    alert("Yoou clicked range!")
})