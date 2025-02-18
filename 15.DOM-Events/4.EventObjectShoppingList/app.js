// document.body.addEventListener('keypress', function(e){
//     console.log(e)
// })

const inp = document.querySelector('#testkeyevent')
inp.addEventListener('keypress', function(e){
    console.log("keypress", e.key)
})

inp.addEventListener('keydown', function(e){
    console.log("keydown", e.key)
})

inp.addEventListener('keyup', function(e){
    console.log("keyup", e.key)
})

/* Add item to shopping */

const shopInp = document.querySelector('#shopinp')
const newUl = document.createElement("ul")
shopInp.addEventListener('keypress', function(e){
    if(e.key == 'Enter' && this.value){
        const value = shopInp.value
        const newLi = document.createElement("li")
        newLi.innerText = value
        newUl.appendChild(newLi)
        this.value = ""
    }
})
document.body.appendChild(newUl)