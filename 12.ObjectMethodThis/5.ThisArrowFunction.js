/* first stage prove pickname is working */
const varietyNames1 = {
    names : ["John", "Shea", "Praveena", "Shawn", "Bershin"],
    pickNames(){
        const {names} = this
        return names[Math.floor(Math.random() * names.length)]
    }
}

// console.log(varietyNames1.pickNames())

/* Second Stage - prove settimeout is working*/
const varietyNames2 = {
    names : ["John", "Shea", "Praveena", "Shawn", "Bershin"],
    pickNames(){
        const {names} = this
        return names[Math.floor(Math.random() * names.length)]
    },
    start(){
        setInterval(function(){
            console.log("Started and continue...")
        }, 2000)
    }
}

// varietyNames2.start()

/* Third Stage - prove settimeout is working for method */
const varietyNames3 = {
    names : ["John", "Shea", "Praveena", "Shawn", "Bershin"],
    pickNames(){
        const {names} = this
        return names[Math.floor(Math.random() * names.length)]
    },
    start(){
        console.log(this.pickNames()) // This works
        setInterval(function(){
            console.log(this) // "Timeout scope"
            console.log(this.pickNames()) // TypeError: this.pickNames is not a function
        }, 2000)
    }
}

// varietyNames3.start()

/* Fouth Stage - NOT idle way to make above work */
const varietyNames4 = {
    names : ["John", "Shea", "Praveena", "Shawn", "Bershin"],
    pickNames(){
        const {names} = this
        return names[Math.floor(Math.random() * names.length)]
    },
    start(){
        console.log(this.pickNames()) // This works
        const that = this
        setInterval(function(){
            console.log(that) // "Works"
            console.log(that.pickNames()) // "Works"
        }, 2000)
    }
}

// varietyNames4.start()

/* Firth Stage - Use Arrow function to make above work */
const varietyNames5 = {
    names : ["John", "Shea", "Praveena", "Shawn", "Bershin"],
    pickNames(){
        const {names} = this
        return names[Math.floor(Math.random() * names.length)]
    },
    start(){
        this.timerId = setInterval( ()=>{
            console.log(this) // "Works"
            console.log(this.pickNames()) // "Works"
        }, 2000)
    },
    stop(){
        clearInterval(this.timerId)
        console.log("Stopped")
    }
}

varietyNames5.start()