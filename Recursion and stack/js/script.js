/* 
function pow(x,n) {
    let result = 1;
    for(let i =0; i<n;i++){
        result *=x
    }
    return result
}
console.log(pow(2,3))
 
function powrec(x,n) {
    if(n==1){
        return x
    }else{
        return x*powrec(x, n-1)
    }
}

console.log(powrec(2,3))
 */
/* 
let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function sumSalaries(arr) {
    if(Array.isArray(arr)){
        return arr.reduce((accum, current)=>accum+current.salary, 0)
    }else{
        let sum =0;
        for(let i of Object.values(arr)){
            sum+=sumSalaries(i)
        }
        return sum
    }
  }
  console.log(sumSalaries(company)) 
  */

function sumTo(n) {
    /* let sum = 0
    for(let i =0; i<=n;i++){
        sum+=i
    }
    return sum 
    */

    /* 
    if(n==1){
        return n
    }else{
        return n+sumTo(n-1)
    }
     */

    return (n * (n + 1) / 2)

}
console.log(sumTo(100))

function factorial(n) {
    if (n != 1) {
        return n * factorial(n - 1)
    } else {
        return n
    }
}
console.log(factorial(3))


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c
    }
    return b
}

console.log(fib(7))


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    /*  let tpm = list;
     while(tpm){
         console.log(tpm.value);
         tpm = tpm.next
     } */
    /* console.log(list.value);
    if(list.next){
        printList(list.next)
    } */
/* let arr =[];
let tpm = list;
while(tpm){
    arr.push(tpm.value)
    tpm = tpm.next
}
for(let i = arr.length-1;i>=0;i--){
    console.log(arr[i]);
} */
if(list.next){
   printList(list.next)
}console.log(list.value);
}
printList(list);

