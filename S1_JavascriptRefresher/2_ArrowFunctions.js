function myFunc() {

}
//Arrow Function - No more issues with the this keyword!
const myFunc1 = () => {

}

function printMyName (name) {
    console.log(name)
}
printMyName('Max')
const printMyName1 = (name, age) => {
    console.log('Manu', 38)
}
printMyName1('Manu')

const multiply = (number) => {
    return number * 2
}
console.log(multiply(2))

const multiply1 = number => number*2
console.log(multiply1(3))