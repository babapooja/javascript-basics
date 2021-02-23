// spread operator - ...
// allows an iterable to spread/expand individually inside receiver
// split into single items and COPY them and not reference them

const arraySO = document.querySelector('#arraySpreadOperator');
const objectSO = document.querySelector('#objectSpreadOperator');


// split the word into chars
const udemy = 'udemy';
const letters = [...udemy];

// combine both the arrays
const boys = ['john', 'bob', 'peter'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';
// this will create an array of arrays
const totalStaff = [boys, girls, bestFriend];
// to create a flat array we need to use the spread operator
const totalStaffFlat = [...boys, ...girls, bestFriend];
// to copy array to another variable we use spread operator
// if we do not use spread operator to copy the elements then the changes made to the new arrya will affect the old array as well
const newFriends = [...totalStaff];
newFriends[0] = 'joe';
arraySO.innerHTML = `Spread Operators in arrays can be used to create a flat array from multiple arrays.<br>
<code>const newArr = [...arr1, ...arr2, ...arr3,]</code><br>
For example - <br>
<code>const boys = ${boys}</code><br>
<code>const girls = ${girls}</code><br>
<code>const bestFriend = ${bestFriend}</code><br>
Using spread operator the flat structure will be - <code>[...boys, ...girls, bestFriend]</code> i.e. ${totalStaffFlat}
<br>
<br>
Spread operator can also be used to copy one array to another - const newArr = [...oldArr]. This will make changes to the new array and not update/modify the old array.`;



// OBJECTS
const PERSON = { name: 'john', job: 'developer' };
// to copy person to newPerson
const newPerson = { ...PERSON, city: 'Chicago', name: 'peter' };
objectSO.innerHTML = `Spread Operators in objects can be used to create a new object.<br>
Which will lead to not creating a reference to the old object. Changes made to either of the objects will not affect each other.<br>
For example - <br>
<code>
const PERSON = ${JSON.stringify(PERSON)}<br>
const newPerson = { ...PERSON, city: 'Chicago', name: 'peter' } i.e. ${JSON.stringify(newPerson)}
</code><br>
Here we see the PERSON object is unchanged.`