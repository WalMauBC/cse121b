/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* W02-Task - Profile Home Page */

/* Step 2 - Variables */

const fullName = 'Patricia Juarez';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/yourprofileimagename.png'; // Replace 'yourprofileimagename.png' with the actual name of your image file

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/yourprofileimagename.png"]'); // Replace 'yourprofileimagename.png' with the actual name of your image file

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favFoods = ['Pizza', 'Chocolate', 'Sushi', 'Ice Cream'];

foodElement.innerHTML = favFoods.join('<br>');

const newFavoriteFood = 'Burger';
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