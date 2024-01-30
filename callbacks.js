//Synchronous Callback function
// function parentFunction(name, callback){
//     callback();
//     console.log("Hey " + name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfuction");
// }
// parentFunction("Random String",randomFunction);
// Asynchronnous callbackfuction example
// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("hey"+name);
// }
// function randomFunction(){
//     console.log("Hey i am callbackfuction");
// }
// parentFunction("Random String",randomFunction);
// oooorrrr
function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("hey"+name);
}
parentFunction("Random String",function(){
    console.log("I am the callback Fuction");
})