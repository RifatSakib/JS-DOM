console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")
console.log("This is from styleInJS ")
const sections = document.querySelectorAll("section") // ekhane getelementByTagName o use kora zeto


// console.log(sections);

for( const section of sections ){
    console.log(section);

    section.style.border = "2px solid red"

    section.style.margin= "5px";

    section.style.borderRadius = "10px";

    section.style.paddingLeft = "50px";
    section.style.backgroundColor= "lightgray";
}

const placeLike = document.getElementById("places_like");
placeLike.style.backgroundColor= "yellow";

const  foodLike = document.getElementById("food_like");
foodLike.classList.add("food","removethisClass"); //style.css a food class a style kora hoise (background color yellowgreen)
foodLike.style.textAlign="center";

foodLike.classList.remove("removethisClass"); 



console.log("This is from styleInJS ")
console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")

//creating any child by js
const li = document.createElement("li")

li.innerText= "Brand new place to go (created by styInj s)"
placeLike.childNodes[3].appendChild(li) 


placeLike.parentNode //findind the parent node
