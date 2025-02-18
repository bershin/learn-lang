/* Avoid touching function definition for repeated calling, instead
    Calling the repeated function inside the function as a callback */
// const btn = document.querySelector("button")
// const moveX = (element, width, delay, callback)=>{
//     setTimeout(()=>{
//         element.style.transform = `translateX(${width}px)`
//         if (callback) callback();
//     },delay)
// }

// moveX(btn, 100, 1000, ()=>{
//     moveX(btn, 200, 1000, ()=>{
//         moveX(btn, 300, 1000, ()=>{
//             moveX(btn, 400, 1000, ()=>{
//                 moveX(btn, 500, 1000)
//             })
//         })
//     });
// })

const btn = document.querySelector("button")
const moveX = (element, width, delay, callback)=>{
    setTimeout(()=>{
        element.style.transform = `translateX(${width}px)`
        callback();
    },delay)
}

moveX(btn, 100, 1000, ()=>{
    moveX(btn, 200, 1000, ()=>{
        moveX(btn, 300, 1000, ()=>{
            moveX(btn, 400, 1000, ()=>{
                moveX(btn, 500, 1000, ()=>{
                    console.log("completed")
                })
            })
        })
    });
})