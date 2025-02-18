/* Success and fail calback as function - Bug Fixed*/
const btn = document.querySelector("button")
const moveX = (element, width, delay, onsuccess, onfailure)=>{
    setTimeout(()=>{
        const browserWidth = window.innerWidth
        const btnRight = btn.getBoundingClientRect().right
        const btnleft = btn.getBoundingClientRect().left
        if(btnRight + width < browserWidth){
            element.style.transform = `translateX(${btnleft+width}px)`
            onsuccess()
        }else{
            onfailure()
        }
    },delay)
}

moveX(btn, 100, 1000, ()=>{
    moveX(btn, 100, 1000, ()=>{
        moveX(btn, 100, 1000, ()=>{
            moveX(btn, 100, 1000, ()=>{
                moveX(btn, 100, 1000, ()=>{
                    console.log("Have enought screen")
                },()=>{
                    alert("Cannot move further!!")
                })
            },()=>{
                alert("Cannot move further!!")
            })
        },()=>{
            alert("Cannot move further!!")
        })
    },()=>{
        alert("Cannot move further!!")
    });
},()=>{
    alert("Cannot move further!!")
})