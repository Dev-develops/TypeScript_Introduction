let radius = 4;
// assigning a string value to the radius will cause errors
let coder = 'Devendra';
//type-annotation use.
//Dynamic Type annotation
let anySpecifier = 'Anything of any data type can be assigned to this';
// Uasge of Types - Complex
// Fixing the type inside an array
let names = ['Devendra', 'Mainsh', 'Steve', 'Steps'];
let booltest = [true, false, true, true, false];
let check = ['Dev', 'Manish', 'Krishna', 4, true];
// specified the array data type applicable to all members
/* Type Tuple */
let tupleTest = ['Devendra Pratap Singh', 4, true];
// The order in the tuple declaration must be followed.
/* Type ENUM */
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
function log(val) {
    console.log(val);
}
log(DoorState.Open); // prints 0 in the console.
log(DoorState[0]); // prints the string key.
function tellJoke() {
    return 'this is a joke';
}
// the function has a return type declared by the type mentioned.
// Advanced Types in TypeScript
// 1. Union Types - allows multiple types to a particular variable
var unionType;
unionType = 1;
unionType = 'Hello';
// 2. Type Guards
function addWithTypeGuard(args1, args2) {
    // typeguards in play
    if (typeof args1 === "string") {
        console.log('First argument is a string');
        return args1 + args2;
    }
    if (typeof args1 === "number" && typeof args2 === "number") {
        console.log('Both arguments are numbers');
        return args1 + args2;
    }
    return args1.toString() + args2.toString();
}
// create a type to act as aliases for union types.
function addWithAlias(args1, args2) {
    return args1.toString() + args2.toString();
}
// 4. Null and undefined
function testUndef(test) {
    console.log('Test parameter: ' + test);
}
// testUndef(); Causes error because typescript wants an argument for it 
// but JS would have supposed it to be undefined and would not have thrown an error.
testUndef(null);
