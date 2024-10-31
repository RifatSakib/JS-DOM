console.log("this is from append js")
// where to add
const placesList = document.getElementById('places-list');
console.log(placesList)
//what to be added
const li2 = document.createElement('li');
li2.innerText = "pahartoli";
// add the child
placesList.appendChild(li2);



//full section add ====================

// where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer)
//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= "My cloth List"
// add the child
section.appendChild(h1);

const ul = document.createElement('ul');
const li3 = document.createElement('li');
li3.innerText= "shirt"
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText= "pant"
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText= "pajama"
ul.appendChild(li5);
section.appendChild(ul);

mainContainer.appendChild(section)


//========================================


// another method

// ==================================

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> Phones i like </h1>
<ul>
    <li>realme</li>
    <li>iphone</li>
    <li>xiaome</li>
    <li>walton</li>


</ul>

`

mainContainer.appendChild(sectionDress);