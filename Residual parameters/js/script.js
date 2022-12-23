

function sum(a,b) {
    console.log(a+b)
    }
sum(1,2,3,4,5)

function sumAll(...arg) {
    let sum = 0;
    for(let i of arg) sum+=i;
    return sum
}

console.log(sumAll(1,2,3,4,5))

function showName(fName, lName, ...titles) {
    console.log(titles+' ' + fName+' '+lName)
        
}
showName('Andrey', 'Krasin', 'My name')

let num = '12345';
// let summ = 0;
// let numArr = num.split('')
// let numArr = Array.from(num)
// let numArr = [...num]
num = [...num]

// .forEach(item=>{
//    summ+=Number(item)  
// })
.reduce((a,b)=>
    a+Number(b),0
)
console.log(num)
// console.log(summ)




/* num=[...num]
.join('')
.
console.log(num) */


