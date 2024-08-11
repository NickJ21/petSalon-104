//constructor
function Service(){

}

function register(){
    console.log("register");
}

function init(){
    //hook events
    $("#btnRegister").on('click',register);
    
}

window.onload=init;