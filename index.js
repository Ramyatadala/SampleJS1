// document.getElementById("count-el").innerText = 5

/*let count = 0

console.log(count)

let myAge

myAge = 23

console.log(myAge)*/

/*let myAge = 23
let humanDogRatio = 7
myDogAge = myAge * humanDogRatio
console.log(myDogAge)*/
let countEl = document.getElementById("count-el")
//console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}