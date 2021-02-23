// destructuring, functions
// REST Operator - gathers or collects the items
// placemnet important, careful with same name
// rest when declare function, spread when invoke the function

const arrayRO = document.querySelector('#arrayRestOperator');
const objectRO = document.querySelector('#objectRestOperator');

// arrays
const fruitsR = ['apple', 'orange', 'lemon', 'banana'];
// gives one(first) element
// const [first] = fruits;
// other items except the first one in the array are collected in rest variable
// rest is always to be placed at the end irrespective of the data being in array or object format
const [first, ...rest] = fruitsR;
arrayRO.innerHTML = `<code>const fruitsR = ${fruitsR}</code><br>
<code>const [first]=fruitsR</code> gives you the first element of the array<br>
<code>const [first, ...rest]=fruitsR</code> gives you - first: 'apple' and rest = ['orange','lemon','banana']`;

// objects
const johnDetails = { firstName: 'john', lasName: 'smith', job: 'developer' };
// here name will be fetched in name variable and rest will consist of the other keys in the johnDetails obj 
const { firstName, ...restKeys } = johnDetails;
objectRO.innerHTML = `<code>const johnDetails = ${JSON.stringify(johnDetails)}</code><br>
<code>const [name, ...restKeys]=johnDetails</code> gives you - firstName: 'john' and restKeys={'lastName': 'smith', job:'developer'}`;

// functions
// use rest when we declare the function
const getAverage = (name, ...scores) => {
    console.log(scores);
    return scores.reduce((total, item) => {
        return total += item
    }, 0) / scores.length;
}
document.querySelector('#calcAvg').addEventListener('click', () => {
    document.querySelector('#average').innerHTML = `<strong>Average of the scores is: </strong> ${getAverage(johnDetails.firstName, 89, 78, 98, 100)}`
})
