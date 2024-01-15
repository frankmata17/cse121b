/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Francisco Mata';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/Me.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const foodElement = document.getElementById('favoriteFoods');

const pictureElement = document.querySelector('picture');

const imageElement = document.createElement('img');
imageElement.setAttribute('src', 'w02-task/images/Me.jpg');
imageElement.setAttribute('alt', 'Description of image');

pictureElement.appendChild(imageElement);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

let favoriteFoods = ['Pozole', 'Pizza', 'Tamales', 'Gelato'];
foodElement.innerHTML = `${favoriteFoods}`;
favoriteFoods.push('Pasta');
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




