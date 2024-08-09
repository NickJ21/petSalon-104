let pets = []; //pets array

//the constructor
function Pet(name,age,gender,service,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
}

function isValid(pet){
    let validation=true;

    if(pet.name==""){
        validation=false;
    }
    if(pet.age==""){
        validation=false;
    }
    
    return validation;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed);

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow();
    }else{
        alert("Please enter the information");
    }
}

function deletePet(id){
    console.log("Deleting " + id);
    pets.splice(id,1);
    document.getElementById(id).remove();//remove from HTML
    displayRow(); //refresh the display
}

function init(){
    let pet1= new Pet("Scooby",10,"Male","","Husky");//my first obj
    let pet2= new Pet("Scrappy",9,"Male","","Mixed");
    pets.push(pet1,pet2);
    displayRow();

}

window.onload=init;//wait to render the HTML