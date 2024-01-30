// function blockScope(){
//     let blockScopedVar =" I am block-scoped";
//     console.log(blockScopedVar);
// }
// console.log(blockScope);
let shodowedVar=" i am global";
function exampleFunction(){
    let shodowedVar="I am local";
    console.log(shodowedVar);
}
console.log(shodowedVar);