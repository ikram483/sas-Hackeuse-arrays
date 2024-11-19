/* exercice1
let firstName = "ikram";
let age = 23;
let isStudent = "false";
const country = "maroc";
console.log(firstName);
console.log(age);
console.log(country);
console.log(isStudent);
//exercice2
let x =10;
const y ="hello";
// const y ="world"; impossible pcq "y" est une connstonte
var z =100;
z =10;
// le console affiche la 2eme valeur 
console.log(z);
console.log(x);
console.log(y);

//exercice3
let a ="42";
console.log(typeof a);
const b ="hello";
console.log(typeof b);
let c =true;
console.log(typeof c);
//exercice4
let x;
console.log("type de x est: "+ typeof(x) );
console.log(x);
let y = null;
console.log("tupe de y est: "+ typeof(y));
console.log(y);
console.log(x==y);
console.log(x===y);
// alors on est deduis que x et y une égalitée strécturé

//exercice5
let a =10;
let b =10;
console.log(a==b);
console.log(a===b);
//il y a pas de difference car l'égalité dans ce cas et non structuré a et b ont le meme valeur

//Exercie6
let x =15;
let y =5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

//exercice7:
let greeting ="bonjour";
greeting = "bonjour "  + "tout le mode";
 console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.length);
//exercice8:
let counter =5;
//counter++;
counter--;
console.log(counter);
//exercice9

let isAdmine = false;
let isLoggedIn = true;
let canAccess 
if (isAdmine==true && isLoggedIn==true) {
    console.log(canAccess=true)
    
}
else{
    console.log(canAccess=false)
}

//exercice simple
let a =11;
if(a %2===0){
    console.log("a=pair")
}
else{
    console.log("a=impair")
}


let age=10;
if (age>=18) {
    console.log("vous etes majeure")
    
}
else{
    console.log("vous etes mineures")

}

//exercice 3
let jour =5;
const jours_de_la_semaine = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
];
if (jour>=1 && jour<=7) {
    console.log(jours_de_la_semaine[jour - 1]);
    
} else {
    console.log("veuiller entrer un nombre entre 1 et 7");
}
//exercice4
let nombre =-7;
if (nombre<0) {
    console.log("le nombre est negatif");
    
}


else if(nombre >0)
{
    console.log("le nombre est positif")
}
else{
    console.log("null");
}
//exedrcice:5
let montant =120;
const tauxReduction = 0.10;
let montantAPayer ;
if (montant >100) {
    montantAPayer = montant - (montant * tauxReduction);console.log("")
    
}
else{
    montantAPayer=montant;
}
console.log("montant a payer:" + montantAPayer.toFixed(2));

//exercice:6
let note =89;

if (note>=90 && note<=100) {
    console.log("Exellent");
}
else if(note>=70 && note<=89){
    console.log("bien");
}
else if(note>=50 && note<=69){
    console.log("Moyen")
}
else{
    console.log("insuffisant")
}*/
//Exercice 7
