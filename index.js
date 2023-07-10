// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(usual = "go to the office") {
    return `This Monday, I will ${usual}.`
}

//Implement a function called wrapAdjective
//It should return a function. This "inner" function should:
    //take a single parameter that should default to "special". Name it however you wish.
    //return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
function wrapAdjective(flair = "*") {
    return function(prt1 = "special"){
        return `You are ${flair}${prt1}${flair}!`
    }
}