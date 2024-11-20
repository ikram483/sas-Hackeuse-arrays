//exercice1
const nember= [1,2,3,4,5];
console.log(nember);
//exercixe2
let fruits =["apple","banana","cherry"];
console.log(fruits[1]);
//ex3
let nombres=[10,20,30,40];

nombres[2]= 50;
console.log(nombres);
//ex4
let frt =["mango","peach","pear"];
frt[3]="pomme";
console.log(frt);
//ex6
let personne ={
    name:"ikram",
    age: 23

    
};
console.log(personne.name);
console.log(personne.age);
//ex7
let person ={
    name:"john",
    age:29
};
console.log("name: " +person.name);
console.log("age : " + person.age);
//ex8
let book ={
    title:"javascript 101",
    autheur: "john doe"
}
book.autheur ="jane doe";
console.log(book.autheur);
//ex 9
let car ={
    make:"Toyota",
    model:"corolla"
   
};
car.year=2020;
console.log(car);

//ex10
// let persn ={
//     nom:ikram,
//     age:23


// };
// let hasAge= "age" in persn;
// console.log(hasAge);
let persone = {
    name: "Alice",
    age: 30
};

let hasAge = "age" in persone;

//console.log(hasAge);
delete persone.age;
console.log("age" in persone); 
//ex11
let nbr =[1,2,3,4,5];
for (let i=0; i< nbr.length; i++){
    console.log(nbr[i]);
}
//ex 12
let nbrs =[1,2,3,4,5,6,7,8,9,10]
let nbrsPair = nbrs.filter(num => num % 2 === 0);
console.log(nbrsPair);
//ex13
let a=[1,2,3]
let b =[ 4,5,6]
console.log(a +","+ b);
//ex 14
let fruita=["apple","banana","cherry","date"];
let index = fruita.indexOf("banana");

if (index !== -1) {
    fruita.splice(index, 1); 
}
console.log(fruita);
//ex15
let numbs =[5, 1, 8, 4, 7];
numbs.sort((a, b) => a - b);
console.log(numbs);
