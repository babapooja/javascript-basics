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

const ages = people.map((person)=>person.age+10);
console.log(ages);

const newPeople = people.map((person)=>{
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age+10,
    }
})

console.log(newPeople);

const names = people.map((item)=>`<span>${item.name}</span>`);
const result = document.querySelector('#result');
result.innerHTML = `<strong>Names are:</strong> ${names.join(', ')}`;
