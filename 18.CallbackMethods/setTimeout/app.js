console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)            // will run the function after 3 seconds                         

console.log("GOODBYE!!") // will run just after HELLO!! 


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);           // will run every 2 seconds

// clearInterval(id);