const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime"]
const container = document.querySelector('#boxes')

/* Without seperate function */
// for(let color of colors){
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('box')
//     newDiv.style.backgroundColor = color
//     container.appendChild(newDiv)
//     newDiv.addEventListener('click', function changeColor(){
//         const h1 = document.querySelector('h1')
//         h1.style.color = newDiv.style.backgroundColor
//     })
// }

/* Add eventlisterner as seperate function - by passing element*/
// for(let color of colors){
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('box')
//     newDiv.style.backgroundColor = color
//     container.appendChild(newDiv)
//     newDiv.addEventListener('click', function(){
//         changeColor(newDiv)
//     })
// }

// function changeColor(newDiv){
//     const h1 = document.querySelector('h1')
//     h1.style.color = newDiv.style.backgroundColor
// }

/* Add eventlisterner as seperate function - with out passing values*/
for(let color of colors){
    const newDiv = document.createElement('div')
    newDiv.classList.add('box')
    newDiv.style.backgroundColor = color
    container.appendChild(newDiv)
    newDiv.addEventListener('click', changeColor)
}

function changeColor(){
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
}