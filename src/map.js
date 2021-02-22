// Array
const people = [
    {
        name: 'Bob',
        age: 20,
        position: 'Developer'
    },
    {
        name: 'Daniel',
        age: 25,
        position: 'Sr. Developer'
    },
    {
        name: 'Jane',
        age: 18,
        position: 'Intern'
    },
    {
        name: 'Jessie',
        age: 26,
        position: 'Lead'
    },
    {
        name: 'Natasa',
        age: 21,
        position: 'Developer'
    }
];


// iterate over the array and fetch only one value from the object of each array
const ages = people.map((person) => person.age);
document.querySelector('#ages').innerHTML = `<strong>Ages are:</strong> ${ages.join(', ')}`;

// modify existing JSON keys by using an external function
const modifyJOSNkeys = (person) => {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 10,
    }
}
const newPeople = people.map(modifyJOSNkeys)


// fetch the names and display the names in a div having id names
const names = people.map((item) => `<span>${item.name}</span>`);
const result = document.querySelector('#names');
result.innerHTML = `<strong>Names are:</strong> ${names.join(', ')}`;
