// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat =(name)=> {//arrow functiom
   
    return  cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
const destructivelyRemoveFirstCat = ()=> cats.shift();//arrow function
// function appendCat(name){
//     const newCats= cats.slice();
//     return  newCats.push("Broom");
// }
function appendCat(name){
    const copyCatsAfter= [...cats,name];
    return  copyCatsAfter;
}
function  prependCat(name){
    const copyCatsBefore= [name,...cats];
    return  copyCatsBefore;
}
 function  removeLastCat(){
    const removeCatl = cats.slice(0,2);
    return removeCatl;
 }
 function removeFirstCat(){
    const removeCatf = cats.slice(1);
    return removeCatf;
 }

