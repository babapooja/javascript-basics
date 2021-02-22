// FILTER: reutrns a new array, can manipulate the size of the new array (unlike map), returns based on condition.

// FIND: returns single instance(obj), returns first match, if no object found returns undefined

const emps = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'peter',
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy',
        age: 30,
        position: 'boss'
    },
    {
        name: 'anna',
        age: 18,
        position: 'intern'
    },
    {
        name: 'daniel',
        age: 35,
        position: 'super boss'
    }
];

document.querySelector('#ffOriginalData').innerHTML = JSON.stringify(emps);


// register click event on the Filter button.
// on click of the Filter button trigger filter operation to filter the people who are below 30 years of age
document.querySelector('#filter').addEventListener('click', () => {
    const youngPeople = emps.filter((person) => person.age < 30);
    document.querySelector('#findFilter').innerHTML = `<strong>People below 30 years are:</strong> ${youngPeople.map((p) => p.name) ? youngPeople.map((p) => p.name).join(', ') : 'No users found'}`;
});

// register click even on Find button.
// fetch the text entered in the input text box
// if the text is not null then search in the array using find function
document.querySelector('#find').addEventListener('click', () => {
    const toSearch = document.querySelector('input[name="findText"]').value;
    if (toSearch) {
        let findResult = toSearch ? emps.find(person => person.name === toSearch) : '';
        document.querySelector('#findFilter').innerHTML = findResult !== undefined ? `"${toSearch}" is present in ${JSON.stringify(findResult)}` : `"${toSearch}" is not present in the given list.`;
    }
});