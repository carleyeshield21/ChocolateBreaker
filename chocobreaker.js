// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

function breakChocolate(n,m) {
    x = n-1
    y = n*(m-1)
    console.log(`A ${n} by ${m} size chocolate needs a break of ${x+y}`)
}
breakChocolate(1,1)
console.log('=====')
breakChocolate(3,3)
console.log('=====')
breakChocolate(5,3)
console.log('=====')
breakChocolate(3,5)
console.log('=====')
breakChocolate(100,99)
console.log('=====')
breakChocolate(99,100)