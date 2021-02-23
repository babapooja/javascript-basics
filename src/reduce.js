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

// REDUCE FOR OBJECTS
// cart example
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        quantity: 1
    },
    {
        title: 'Google pixel',
        price: 499.99,
        quantity: 2
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        quantity: 4
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 299.99,
        quantity: 5
    }
];
document.querySelector('#cartData').innerHTML = JSON.stringify(cart);

document.querySelector('#cartTotal').addEventListener('click', () => {

    let total = cart.reduce((total, cartItem) => {
        const { price, quantity } = cartItem;
        total.totalItems += quantity;
        total.totalPrice += price;
        return total;
    }, {
        totalItems: 0,
        totalPrice: 0.0
    });
    document.querySelector('#reduceObjects').innerHTML = `Total price $${total.totalPrice} for ${total.totalItems} items`

})



// github repos example
