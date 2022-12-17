//Spread => Used to split up array elements OR object properties
const oldArray = [1,2,3]
const newArray = [...oldArray, 4, 5] // [1,2,3,4,5]
const oldObject = {
    name: 'Max'
}
const newObject = { ...oldObject, newProp:5 }

//Rest => Used to merge a list of function arguments into an array

function sortArgs(...args) {
    return args.sort()
}

const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson)

const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))