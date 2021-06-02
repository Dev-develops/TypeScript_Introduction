class classWithConstructor {
    id: number;
    name: string;

    constructor( _id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}

let classWithConstructorObject = new classWithConstructor(10, 'Devendra');
console.log(classWithConstructorObject);

// Class Modifiers and access modifiers
class classWithPublicAccess {
    public id: number;
}

let publicAccess = new classWithPublicAccess();
publicAccess.id = 20;

console.log(publicAccess);

// Private Access Modifiers
class classWithPrivateAccess {
    private id: number;
}

let privateAccess = new classWithPrivateAccess();
// privateAccess.id = 20; Not allowed as the id property is private

// Constructor to modify parameters
class classWithAutomaticProperties {
    constructor(public id: number, private name: string) {

    }
}

let myAutomaticClass = new classWithAutomaticProperties(100, 'ClassName');
console.log(`id: ${myAutomaticClass.id}`);
// console.log(`name: ${myAutomaticClass.name}`); causes error because name is private and only accessible inside class.
// Readonly property is also available in the class similarly to the interface.

class testClass {
    private _id: number;
    private _name: string;
    static _hobby: string = 'Static Property'; // marked static

    static printData(): void {
        console.log(this._hobby);
    }

    get name(): string{
        return this._name;
    }
    set name(value: string){
        this._name = value;
    }

}

let test = new testClass();
test.name = 'Devendra';

console.log(test.name); //private property accessed with getters and setters.

testClass._hobby = 'Playing Video Games';
// available without creating an instance of the class.
// static functions
testClass.printData();