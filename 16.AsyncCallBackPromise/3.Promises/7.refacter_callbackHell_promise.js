// const btn = document.querySelector("button")
// const moveX = (element, width, delay, onsuccess, onfailure)=>{
//     setTimeout(()=>{
//         const browserWidth = window.innerWidth
//         const btnRight = btn.getBoundingClientRect().right
//         const btnleft = btn.getBoundingClientRect().left
//         if(btnRight + width < browserWidth){
//             element.style.transform = `translateX(${btnleft+width}px)`
//             onsuccess()
//         }else{
//             onfailure()
//         }
//     },delay)
// }

// moveX(btn, 100, 1000, ()=>{
//     moveX(btn, 100, 1000, ()=>{
//         moveX(btn, 100, 1000, ()=>{
//             moveX(btn, 100, 1000, ()=>{
//                 moveX(btn, 100, 1000, ()=>{
//                     console.log("Have enought screen")
//                 },()=>{
//                     alert("Cannot move further!!")
//                 })
//             },()=>{
//                 alert("Cannot move further!!")
//             })
//         },()=>{
//             alert("Cannot move further!!")
//         })
//     },()=>{
//         alert("Cannot move further!!")
//     });
// },()=>{
//     alert("Cannot move further!!")
// })

const btn = document.querySelector("button")
const moveX = (element, width, delay)=>{
    return new Promise((response, reject)=>{
        setTimeout(()=>{
            const browserWidth = window.innerWidth
            const btnRight = btn.getBoundingClientRect().right
            const btnleft = btn.getBoundingClientRect().left
            if(btnRight + width < browserWidth){
                element.style.transform = `translateX(${btnleft+width}px)`
                response()
            }else{
                reject({browserWidth, btnRight, width})
            }
        },delay)
    })
}

/* Can be shorterened below */
// moveX(btn, 100, 1000)
//     .then(()=>{
//         return moveX(btn, 100, 1000) 
//     })
//     .then(()=>{
//         return moveX(btn, 100, 1000) 
//     })
//     .then(()=>{
//         return moveX(btn, 100, 1000) 
//     })
//     .then(()=>{
//         return moveX(btn, 100, 1000) 
//     })
//     .then(()=>{
//         console.log("Moved to END!!")
//     })
//     .catch(()=>{
//         alert("Cannot move further!!")
//     })

moveX(btn, 100, 1000)
    .then(()=>moveX(btn, 100, 1000))
    .then(()=>moveX(btn, 100, 1000))
    .then(()=>moveX(btn, 100, 1000))
    .then(()=>moveX(btn, 100, 1000))
    .then(()=>{console.log("Moved to END!!")})
    .catch(({browserWidth: brw, btnRight: br, width: w})=>{
        alert(`Cannot move further!!\n
            Browser width of ${brw}
            will be '<'
            Box moved width of ${br+w}`)
    })


