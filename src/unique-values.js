// menu items from where we will fetch the unique values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast'
    },
    {
        name: 'bread-butter',
        category: 'breakfast'
    },
    {
        name: 'burger',
        category: 'lunch'
    },
    {
        name: 'steak',
        category: 'dinner'
    },
    {
        name: 'bacon',
        category: 'breakfast'
    },
    {
        name: 'eggs',
        category: 'breakfast'
    },
    {
        name: 'pasta',
        category: 'dinner'
    },
    {
        name: 'dal-rice',
        category: 'dinner'
    },
    {
        name: 'dosa',
        category: 'breakfast'
    },
    {
        name: 'fruits',
        category: 'breakfast'
    }
]

// new Set creates a set.
// set is a DS that stores all the unique values
const categories = ['all', ...new Set(menu.map((category) => category.category))];
document.querySelector('#unique').innerHTML = categories.map((item) => item.toUpperCase()).join(', ')
