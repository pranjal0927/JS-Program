// find the factorial of a number

let num = +prompt('enter number')
let fact = 1

for(i = 1; i <= num; i++)
{
    fact = fact * i

}
console.log(fact)