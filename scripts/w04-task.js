/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: "Francisco Mata",
    photo: "images/Me.jpg",
    favoriteFoods: [
        'Pozole',
        'Tostadas', 
        'Tacos'
    ],
    hobbies: [
        'Soccer',
        'Movies',
        'Reading',

    ],
    placesLived: []
};
myProfile.placesLived.push (
    {
        place: 'San Diego, California',
        length:'7 years',
    },
    {
        place: 'Provo, Utah',
        length: '6 months',
    },
    {
        place: 'Orem, Utah',
        length: '20 years',
    },
    {
        place: 'Salta, Argentina',
        length: '2 years',
    },
);

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = `Photo of ${myProfile.name}`;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});

