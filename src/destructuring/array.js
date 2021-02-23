// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// cumbersome and hardcoded approach to fetch the values from array
const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

const [john, peter, bob, anna] = friends;
// if you try to access a value that is not present in the array then it is referred as undefined

const [, a, , b, c] = friends;
document.querySelector('#arrayDestructuring').innerHTML = `Fetch the alternate value then you can do the same by using a comma [value1, , , valuex, , valuen]. <br><strong>Friends are: </strong>${friends.join(', ')}<br><strong>Required friends are: </strong>${a}, ${b}, ${c}`;