// Function return types definition

function addNumbers(a: number, b: number) : number{
    return a + b;
}
// defining the return type rules for the function in typescript

function addNumberString(a:number, b: number) : string{
    return (a + b).toString();
}

// adding a question mark makes the argument optional
var addString = function(a: string, b?: string) : string{
    return a + b;
}
log(addString('Devendra', ' Pratap'));

//Types of arguments for a function

// 1. Default arguments kick in if we don't provide a parameter.
function buildName(firstName: string, lastName: string = "Pratap"){
    return firstName + " " + lastName;
}

// 2. Grouping of the function parameters REST parameters
function buildPerson(firstname: string, ...remainingNames: string[]){
    return firstname + " " + remainingNames.join(" ");
}
let personOne = buildPerson("Devendra", "Pratap", "Singh");