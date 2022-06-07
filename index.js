// code your solution here
function saturdayFun (string ='roller-skate'){
    return `This Saturday, I want to ${string}!`
}
console.log (saturdayFun ('bathe my dog'));

let mondayWork = function (string = "go to the office"){
    return `This Monday, I will ${string}.`

}
 console.log (mondayWork('work from home'));

 function wrapAdjective(){
     
     return function (innerpara="special"){
         return `You are ${innerpara}`

     };
 }
