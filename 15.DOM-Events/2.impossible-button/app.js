const btn = document.querySelector("button")
btn.addEventListener('mouseover', function(){
    console.log("Mouse over me")
    const width = Math.floor(Math.random() * window.innerWidth)
    const height = Math.floor(Math.random() * window.innerHeight)
    btn.style.top = `${height}px`;
    btn.style.left = `${width}px`;
})

btn.addEventListener('click', function(){
    btn.innerText = "You clicked me!!!"
    document.body.style.backgroundColor = "green"
})
