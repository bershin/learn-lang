/* Add error */
const btn = document.querySelector("button")
const moveX = (element, width, delay, callback)=>{
    const browserWidth = window.innerWidth
    const btnRight = btn.getBoundingClientRect().right
    const btnleft = btn.getBoundingClientRect().left
    if(btnRight + width < browserWidth){
        setTimeout(()=>{
            element.style.transform = `translateX(${btnleft+width}px)`
            if (callback) callback();
        },delay)

    }else{
        console.log("Maximum Reached!!!")
    }
}

moveX(btn, 100, 1000, ()=>{
    moveX(btn, 100, 1000, ()=>{
        moveX(btn, 100, 1000, ()=>{
            moveX(btn, 100, 1000, ()=>{
                moveX(btn, 100, 1000)
            })
        })
    });
})