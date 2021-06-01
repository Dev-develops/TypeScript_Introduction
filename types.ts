let radius = 4;
// assigning a string value to the radius will cause errors

let coder: string = 'Devendra';
//type-annotation use.

//Dynamic Type annotation
let anySpecifier: any = 'Anything of any data type can be assigned to this';

// Uasge of Types - Complex

// Fixing the type inside an array
let names: string[] = ['Devendra', 'Mainsh', 'Steve', 'Steps'];
let booltest: boolean[] = [true, false, true, true, false];

let check: any[] = ['Dev', 'Manish', 'Krishna', 4, true];
// specified the array data type applicable to all members

/* Type Tuple */

let tupleTest: [string, number, boolean] = ['Devendra Pratap Singh', 4, true];
// The order in the tuple declaration must be followed.

/* Type ENUM */

enum DoorState {
    Open,
    Closed,
    Ajar
}

function log(val: any): void  {
    console.log(val);
}

log(DoorState.Open); // prints 0 in the console.
log(DoorState[0]);  // prints the string key.

function tellJoke(): string{
    return 'this is a joke';
}
// the function has a return type declared by the type mentioned.

// Advanced Types in TypeScript

// 1. Union Types - allows multiple types to a particular variable
var unionType : string | number;
unionType = 1;
unionType = 'Hello';

// 2. Type Guards
function addWithTypeGuard(args1: string | number, args2: string | number) : string | number{
    // typeguards in play
    if(typeof args1 === "string"){
        console.log('First argument is a string');
        return args1 + args2;
    }

    if(typeof args1 === "number" && typeof args2 === "number"){
        console.log('Both arguments are numbers');
        return args1 + args2;
    }
    
    return args1.toString() + args2.toString();
}

// 3. TypeAliases - naming convention for union types

type stringOrNumber = string | number;
// create a type to act as aliases for union types.

function addWithAlias (args1: stringOrNumber, args2: stringOrNumber){
    return args1.toString() + args2.toString();
}

// 4. Null and undefined
function testUndef(test: null | number){
    console.log('Test parameter: ' + test);
}

// testUndef(); Causes error because typescript wants an argument for it 
// but JS would have supposed it to be undefined and would not have thrown an error.
testUndef(null);
