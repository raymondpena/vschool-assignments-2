var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
let pArray = []
for (var i = 0; i < people.length; i++) {
    pArray.push(people[i])
    for (var k = 0; k < alphabet.length; k++) {
        pArray.push(alphabet.split("")[k])
    }
}
console.log(pArray)