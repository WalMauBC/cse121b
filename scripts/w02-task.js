/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* W02-Task - Profile Home Page */

/* Step 2 - Variables */

const fullName = 'Waldo Balvin';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/photo_perfil.png';
const altProfilePicture = 'images/photo_perfil.png'; // 

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/photo_perfil.png"]'); 

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = '${currentYear}';






/* Step 5 - Array */

const favFoods = ['Lomo saltado', 'Tallarines rojos', 'Pure con arroz', 'Tallarines verdes', 'Aji de gallina'];

foodElement.innerHTML = favFoods.join('<br>');

const newFavoriteFood = 'Causa';
favFoods.push(newFavoriteFood);


foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

/* Additional Steps - Working with Arrays */

// Remove the first element in the favorite food array
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;