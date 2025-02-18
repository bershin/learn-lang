/* Basic with functon */
const btn = document.querySelector("button")
const moveX = (element, width, delay) => {
    setTimeout(() => {
        btn.style.transform = `translateX(${0+width}px)`
        setTimeout(() => {
            btn.style.transform = `translateX(${100+width}px)`
            setTimeout(() => {
                btn.style.transform = `translateX(${200+width}px)`
                setTimeout(() => {
                    btn.style.transform = `translateX(${300+width}px)`
                    setTimeout(() => {
                        btn.style.transform = `translateX(${400+width}px)`
                    }, delay)
                }, delay)
            }, delay)
        }, delay)
    }, delay)
}
moveX(btn, 100, 1000)