// Function return types definition
function addNumbers(a, b) {
    return a + b;
}
// defining the return type rules for the function in typescript
function addNumberString(a, b) {
    return (a + b).toString();
}
// adding a question mark makes the argument optional
var addString = function (a, b) {
    return a + b;
};
log(addString('Devendra', ' Pratap'));
//Types of arguments for a function
// 1. Default arguments kick in if we don't provide a parameter.
function buildName(firstName, lastName = "Pratap") {
    return firstName + " " + lastName;
}
// 2. Grouping of the function parameters REST parameters
function buildPerson(firstname, ...remainingNames) {
    return firstname + " " + remainingNames.join(" ");
}
let personOne = buildPerson("Devendra", "Pratap", "Singh");
