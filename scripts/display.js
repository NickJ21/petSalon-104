function displayRow() {
    let table = document.getElementById("display");
    let row = "";
    //travel the array(for)
    for (i = 0; i < pets.length; i++) {
        let pet=pets[i];
        //create the template
        row += `
    <tr id="${i}">
        <td>${i+1}</td>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td>${pet.breed}</td>
        <td><button class="btn btn-primary btn-sm btn btn-danger" onclick="deletePet(${i});">Delete</button></td>
        </tr>
    `;
    }
    //display the row on the html
    table.innerHTML = row;
    displayInfo();
}

function displayInfo(){
    document.getElementById("totalPet").innerHTML=pets.length;
}