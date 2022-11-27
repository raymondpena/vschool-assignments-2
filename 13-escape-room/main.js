const readline = require("readline-sync");
const name = readline.question("Hello, what is your name? - ");
const greeting = readline.question(`hello ${name} do you want to play a game? type "yes" or "no" - `)
let userKey = 0
while (userKey < 1) {
if (greeting == "yes"){
    console.log("You will have 3 options...")
    console.log("1. Put your hand in the hole.")
    console.log("2. Find the key.")
    console.log("3. Open the door.")
    let responseOne = readline.question("What will it be? 1, 2, or 3? - ")
    if (responseOne == 1) {
        console.log("You die.")
        break;
    } else if (responseOne == 2) {
        console.log("Pick 1, and only 1... heHE!")
        console.log("[11, 52, 15, 47, 53, 17]")
        let responseTwo = readline.question("Pick... your... BET!! PICK YOUR BET!!! - ")
        if (responseTwo % 2 == 0) {
            console.log("Your odds were %17, my lucky number!")
            console.log("Since you're so lucky, Here's a key.")
            userKey++
        }else {
            console.log("You die.")
            break;
        }
    }else if (responseOne == 3) {
        console.log("This door seems to be locked.")
        console.log("Try something else.")
    }else {
        console.log("This isn't what I asked you. DIE!!!")
        break;
    }
}else if (greeting == "no") {
    console.log("Have a wonderful day!")
    break;
}else {
    console.log("This is not what i asked you... Leave!!!")
    break;
}
if (userKey === 1) {
    console.log("Two Options remain...")
    console.log("1. Put your hand in the hole.")
    console.log("2. Open the door.")
    let responseThree = readline.question("Final question - ")
    if (responseThree == 1) {
        console.log("You die.")
    }else if (responseThree == 2) {
        console.log("*Opens door* WINNER WINNER CHICKEN DINNER!")
    }else {
        console.log("Misclick? I dont care. DIE!!")
    }
}}