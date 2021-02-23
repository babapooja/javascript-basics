// accessing/unpacking objects easily in a faster way

const objectDestructResult = document.querySelector('#objectDestructuring');

const bobDetails = {
    first: 'bob',
    last: 'sanders',
    city: 'Chicago',
    siblings: {
        sister: 'jane'
    }
}

// accessing values using dot notation
const fName = bobDetails.first;
const lName = bobDetails.last;
const sister = bobDetails.siblings.sister;

// the variable names used should be same as the keynames used in the object.
// different names can be used by using aliases as shown below. but once an alias has been created it should only be used and not the keyname
// if the key is not present in the object and still used then it is undefined
const { first: frstName, city, zip, siblings: { sister: favouriteSister } } = bobDetails;
objectDestructResult.innerHTML = `<code>{ first: frstName, city, zip, siblings: { sister: favouriteSister } }</code> 
<br>Destructuring can be done as shown above. frstName, favouriteSister are aliases. If no aliases are to be used then the variable name should be same as that of the keyname in the object.<br>`;


// usage of destructuring in functions
// paramters in the function can be given as obj destructured
const printPerson = ({ first, last, city, zip }) => {
    objectDestructResult.innerHTML = `<strong>Values after destructuring are: </strong>${first}, ${last}, ${city}, ${zip}<br>**If no key is present in the object then the variable is undefined..`;
}

// invoke the above function when button is clicked
document.querySelector('#destructObj').addEventListener('click', () => {
    printPerson(bobDetails);
});

