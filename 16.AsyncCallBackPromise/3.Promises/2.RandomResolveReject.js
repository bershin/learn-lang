// Unpredicted status from promise
const willIgetOne = new Promise((resolve, reject)=>{
    const rand = Math.random();
    console.log(rand)
    if(rand < 0.5){
        resolve();
    }else{
        reject();
    }
});

// console.log(willIgetOne)
willIgetOne.then(()=>{
    console.log("You will get one")
}).catch(()=>{
    console.log("No chance!")
})