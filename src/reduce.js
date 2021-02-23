// REDUCE: iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
// can replace filter and find

const reduceResult = document.querySelector('#reduce');
const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
];
document.querySelector('#reduce-data').innerHTML = JSON.stringify(staff);

// 1st comes the callback function with 2 parameter - 
//      a) reduced value that is tu be returned
//      b) single item of the array on which reduce is being performed
// 2nd parameter of the reduce function is the initial value of the reduced value
const totalSalary = staff.reduce((total, person) => {
    total += person.salary;
    return total;
}, 0);

reduceResult.innerHTML = `<strong>Total salary spent on staff: </strong>$${totalSalary}`;
