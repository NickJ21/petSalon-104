function save(item) {
    let list = read();//getting [] or LS info
    list.push(item); //push the new item
    console.log(list);
    //get the LS items (obj/array)
    //push the new item
    //parse into a string

    console.log(item);//obj
    let val = JSON.stringify(list);//parse obj into string
    console.log(val);//string
    localStorage.setItem("services", val);
}

function read() {
    let data = localStorage.getItem("services");
    console.log(data);

    if (!data) {//NOT data? Like asking a question. 
        //If local storage is empty
        return []; //empty array
    } else {
        //we have info on the local storage
        let list = JSON.parse(data); //convert it back into an array/obj
        return list; //the array
        //return the obj/array
    }
}