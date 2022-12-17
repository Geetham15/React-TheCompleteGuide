const person = {
    name: 'Max'
}

//const secondPerson = person;
//person.name = 'Manu'
//console.log(secondPerson)

const secondPerson = {
    ...person //copy the properties
}
person.name = 'Manu'
console.log(secondPerson)