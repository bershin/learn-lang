// Promise return from function - with delay
const willIgetOne = ()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const rand = Math.random();
        console.log(rand)
        if(rand < 0.5){
            resolve();
        }else{
            reject();
        }  
    }, 2000);

    })
}

// console.log(willIgetOne)
willIgetOne().then(()=>{
    console.log("You will get one")
}).catch(()=>{
    console.log("No chance!")
})