// dot notation
const person = {
    name: 'John '
};

// square bracket notation
// without inverted commas the key cannot be created as below
const items = {
    'featured-items': ['item 1', 'item2', 'item 3']
}

// dynamically creating the keys
// app[keyname] = value to assign
// keyname can be a variable which can be assigned
let appState = 'loading';
const app = {
    [appState]: true
}

const state = {
    loading: true,
    name: '',
    job: ''
}

// create function to update the state
const updateState = (key, value) => {
    state[key] = value;
}
// update the state object with specific values by calling the function
document.querySelector('#updateJSON').addEventListener('click', () => {
    updateState('name', 'Joe');
    updateState('age', 23);
    updateState('job', 'Developer');

    document.querySelector('#dynamic').innerHTML = JSON.stringify(state);
})

