// Array.from - NOT ON PROTOTYPE

// from - returns Array object from an object
// with a length peoperty or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set



const text = document.querySelectorAll('.text');
const newText = Array.from(text).find((item) => item.textContent === 'Hello 3');
document.querySelector('#arrayFrom').innerHTML = `Array.from converts an array-like structure to an array on which we can perform find, filter, map etc operations.<br>
<code>const newText = Array.from(text).find((item) => item.textContent === 'Hello 3');</code><br>
Above code snippet has converted the NodeList - 
<br><code><h3 class="text">Hello 1</h3>
<h3 class="text">Hello 2</h3>
<h3 class="text">Hello 3</h3></code>
to an Array where we searched for a particular text content using find function <br>
<code>Array.from(text).find((item) => item.textContent === 'Hello 3')</code><br>
whose result is - <strong>${newText.innerHTML}</strong>
`;