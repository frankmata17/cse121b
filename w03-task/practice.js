// let firstName = 'Francisco';
// let lastName = 'Mata';

// function fullName(first, last) {
//     return `${first} ${last}`;
// }
// console.log(fullName)

// const fullName = function(first, last) {
//     return `${first} ${last}`;
// }

// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name=> name.charAt(0) === 'B');
console.log(namesB)

let nameLengths = names.map((name) => name.length);
console.log(nameLengths)

names.reduce((total, name) => total + name.length, 0) / names.length;