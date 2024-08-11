let pets = []; //pets array

//the constructor
function Pet(name,age,gender,phone,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
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
    let inputPhone = document.getElementById("txtPhone").value;
    let inputBreed = document.getElementById("txtBreed").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputPhone,inputBreed);

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow();
    }else{
        alert("Please enter the information");
    }
}

function deletePet(id){
    if (confirm("Are you sure you want to delete pet?")){
    console.log("Deleting " + id);
    pets.splice(id,1);
    document.getElementById(id).remove();//remove from HTML
    displayRow(); //refresh the display}
    }else{
        return
    }
}

function init(){
    let pet1= new Pet("Scooby",10,"Male","231-098-3432","Husky");//my first obj
    let pet2= new Pet("Scrappy",9,"Male","908-392-8763","Mixed");
    pets.push(pet1,pet2);
    displayRow();

}

window.onload=init;//wait to render the HTML