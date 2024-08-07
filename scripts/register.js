let pet1 = {
    name: "Beau",
    age: 4,
    gender: "Male",
    service: "Haircut",
    breed: "Golden Retriever"
}
let pet2 = {
    name: "Rocky",
    age: 12,
    gender: "Male",
    service: "Bath and Dry",
    breed: "Beagle"
}
let pet3 = {
    name: "Kitty",
    age: 15,
    gender: "Female",
    service: "Nail Trimming",
    breed: "Black Cat"
}

let petRegister = [
    pet1,
    pet2,
    pet3
]

//fuction to display pet names from array petRegister
function displayRegister() {
    for (let i = 0; i < petRegister.length; i++) {
        document.getElementById("register").innerHTML+=`<p> ${(petRegister[i].name)} </p>`;
    }
}

function numRegister(){
    document.getElementById("reg-num").innerHTML+=`<p> ${(petRegister.length)} </p>`;
}


window.onload= numRegister()
window.onload= displayRegister() //display registered pets on page load