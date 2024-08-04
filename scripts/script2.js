/* Object Literal */

let person = {
    name : "Nick",
    age : 30
}

console.log("The name is " + person.name + " and the age is " + person.age);
/*
let arrayName = [
    "Fernanda",
    "Kevin",
    "Brett"
]

arrayName[1]  -> Kevin

*/

/* Class Objects */

let student1 = {
    name: "Nick",
    email: "nick@test.com",
    grade: 3.12
}
let student2 = {
    name: "Juan",
    email: "juan@test.com",
    grade: 3.0
}
let student3 ={
    name: "Emilio",
    email: "emilio@test.com",
    grade: 2.5
}

/* print students average grade */
/* (s1grade + s2grade + s3grade)/3 = avg */
let averageGrade = (student1.grade + student2.grade + student3.grade)/3;
console.log(averageGrade);

/* Array of objects */
 let students = [
    student1,
    student2,
    student3
 ]

 /* print all the names of the students in the array */
 console.log(students[0].name);
 console.log(students[2].grade);

 /* Challenge */

 let book1 = {
    title: "Les Mis",
    author: "Hugo",
    year: 1790
 }
 let book2 = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 2000
 }
 let book3 = {
    title: "Of Mice and Men",
    author: "David",
    year: 1950
 }

 let library = [book1, book2, book3];
 for (let i=0; i<library.length; i++){
    console.log(library[i].title + " " + library[i].year)
 }
