// const delayedFunction = () =>{
//     console.log('Delayed function executed');
// };
// setTimeout(delayedFunction,2000);
// setInterval Function
//Function to be executed at intervals.
const repeatedFuction = ()=>{
    console.log('Executed repeated fuction..');
}
//Set interval (execute repeatedFuction every 1000 millisecond)
const intervalId=setInterval(repeatedFuction,1000);
//  After some time (e.g 5000 millisecond ),stop the inverval
setTimeout(() =>{
    clearInterval(intervalId);
    console.log('Interval stopped');
},5000);