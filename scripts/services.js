let services = [];
//constructor
function Service(title, price) {
    this.title = title;
    this.price = price;
}
function isValid(service) {
    let validation = true;
    if (service.title == "") {
        validation = false;
    } if (service.price == "") {
        validation = false;
    }
    return validation;
}

function register() {
    let title = $("#txtTitle").val();
    let price = $("#txtPrice").val();

    let newService = new Service(title, price);
    if (isValid(newService) == true) {
        save(newService);
        $("input").val("");//clear the inputs
        services.push(newService);
        srvcDisplayRow();
    } else {
        alert("Please enter the information");
    }
}

function srvcDisplayRow() {
    let table = document.getElementById("serviceTable");
    let row = "";
    for (i = 0; i < services.length; i++) {
        let srvc = services[i];
        row += `
        <tr id="${i}">
        <td>${i + 1}</td>
        <td>${srvc.title}</td>
        <td>${srvc.price}</td>
        <td><button class="btn btn-primary btn-sm btn btn-danger" onclick="deleteService(${i});">Delete</button></td>
        </tr>`;
    }
    table.innerHTML = row;
}
function deleteService(id){
    if (confirm("Are you sure you want to delete service?")){
    console.log("Deleting " + id);
    services.splice(id,1);
    document.getElementById(id).remove();//remove from HTML
    srvcDisplayRow(); //refresh the display}
    }else{
        return
    }
}


function init() {
    //hook events
    $("#btnRegister").on('click', register);

}

window.onload = init;