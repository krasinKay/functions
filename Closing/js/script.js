/* 
let name = 'Roma';
function sayHi(){
    console.log('Hi, '+name)
}
name = 'Pete';
sayHi()

function makeWorker() {
    let name = 'Niko'
    return function(){
        console.log(name)
        
    }
}
name='Andrey';
let work = makeWorker();
work() 
*/

/* 
function sayHiBye(fName,lName){
    function getFullName() {
        return fName+' '+lName
    }
    console.log('Hello, '+getFullName())
    console.log('Bye, '+getFullName())
}

sayHiBye('Andrey', 'K.')

function User(name) {
    this.sayHi = function () {
        console.log(name)       
    }
}
let user = new User('Andrey');
user.sayHi();

function makeCounter(){
    let count = 0;
    return function () {
        return count++
    }
};

let counter = makeCounter();
console.log(counter())
console.log(counter())
console.log(counter()) 
*/

function sum(a) {
    return function (b) {
        return a+b
    }
    }
    console.log(sum(1)(2))


    let arr = [1, 2, 3, 4, 5, 6, 7];  
function inArray(arr) {
    return function (x){
        return arr.includes(x)
    }   
}
console.log(arr.filter(inArray([1,2,4,10])))

function inBetween(a,b) {
    return function(x){
        return x >= a && x<=b;
    }
}
console.log(arr.filter(inBetween(3,6)))





