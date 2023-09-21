/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullname = 'Jarom Edwards';
let currentYear = '2023';
let profilePicture = 'images/millie.jpeg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement = ''
imageElement.src = profilePicture
imageElement.alt = 'Profile image of Jarom Edwards';


/* Step 5 - Array */

const favoriteFoods = [
    'rice',
    'goat',
    'butter chicken'
]
let anotherFood = 'tacos';
foodElement.textContent = favoriteFoods;

favoriteFoods.push(anotherFood);
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}` 