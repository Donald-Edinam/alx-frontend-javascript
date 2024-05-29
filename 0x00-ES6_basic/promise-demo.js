let p = new Promise((resolve, reject) => {
    let a = 1+2
    if(a == 2){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the", message);
}).catch((error) => {
    console.log("error", error)
})

const firstRun = new Promise((resolve, reject) => {
    resolve("Good")
})


const secondRun = new Promise((resolve, reject) => {
    resolve("Better")
})

const thirdRun = new Promise((resolve, reject) => {
    resolve("Best")
})

Promise.all([
    firstRun,
    secondRun,
    thirdRun
]).then((message) => {
    console.log("Good", message)
})