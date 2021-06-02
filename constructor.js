class classWithConstructor {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
}
let classWithConstructorObject = new classWithConstructor(10, 'Devendra');
console.log(classWithConstructorObject);
// Class Modifiers and access modifiers
class classWithPublicAccess {
}
let publicAccess = new classWithPublicAccess();
publicAccess.id = 20;
console.log(publicAccess);
// Private Access Modifiers
class classWithPrivateAccess {
}
let privateAccess = new classWithPrivateAccess();
// privateAccess.id = 20; Not allowed as the id property is private
// Constructor to modify parameters
class classWithAutomaticProperties {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myAutomaticClass = new classWithAutomaticProperties(100, 'ClassName');
console.log(`id: ${myAutomaticClass.id}`);
// console.log(`name: ${myAutomaticClass.name}`); causes error because name is private and only accessible inside class.
// Readonly property is also available in the class similarly to the interface.
class testClass {
    static printData() {
        console.log(this._hobby);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
testClass._hobby = 'Static Property'; // marked static
let test = new testClass();
test.name = 'Devendra';
console.log(test.name); //private property accessed with getters and setters.
testClass._hobby = 'Playing Video Games';
// available without creating an instance of the class.
// static functions
testClass.printData();
