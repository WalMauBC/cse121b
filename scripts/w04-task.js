/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Waldo Balvin",
    photo: "images/photo_perfil.png", 
    favoriteFoods: [
        'Arroz con pollo', 
        'Pure con arroz',
        'Tallarines verdes'
    ],
    hobbies: [
        'Basket', 
        'Videogames',
        'Travel'
    ],
    placesLived: [
        {
            place: 'Lima, Peru',
            length: '5 year'
        },
       
    ]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoImg = document.querySelector('#photo');
photoImg.src = myProfile.photo;
photoImg.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedDL = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedDL.appendChild(dt);
    placesLivedDL.appendChild(dd);
});
