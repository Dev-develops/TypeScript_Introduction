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