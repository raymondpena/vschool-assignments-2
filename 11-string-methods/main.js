/* 1. Write a function that takes a string as a parameter and 
returns the same string in all capital letters followed by 
all lowercase letters.*/

function capilizeAndLowercase (data) {
    return data.toUpperCase() + data.toLowerCase()
}
// console.log(capilizeAndLowercase("Hello"))

/* 2. Write a function that takes a string as a parameter and 
returns a number that is half the string's length, rounded down.*/

function halfString (data) {
    return Math.floor(data.length / 2) 
}
console.log(halfString("Hello"))
console.log(halfString("Hello World"))

/* 3. Write a function that uses slice() and the other functions 
you've written to return the first half of the given string.*/

function sliceString (data) {
    return data.slice(0, halfString(data))
}
console.log((sliceString("Hello")))
console.log((sliceString("Hello World")))

/* Write a function that takes a string as a parameter and returns
that string where the first half is capitalized, and the second 
half is lowercase.*/

function firstCapSecondLow(data) {
    firstCap = data.slice(0, halfString(data)).toUpperCase()
    secondLow = data.slice(halfString(data), data.length).toLowerCase()
    return firstCap + secondLow
}
console.log(firstCapSecondLow("hello"))
console.log(firstCapSecondLow("hello WORLD"))



