// A class can have only one base class, but can implement multiple interfaces
// the second interface extends the first interface
// multiple interfaces implemented using ,
class interfaceInheritance {
}
// Constructor loading -> the constructor of the derived class loads the constructor of the super class
class baseClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
class derivedClassWithConstructor extends baseClassWithConstructor {
    constructor(_id, _name) {
        super(_id);
        this.name = _name;
    }
}
// Protected Class Members
class testProtectedClass {
    getId() {
        return this.id;
    }
}
class DerivedFromProtected extends testProtectedClass {
    constructor() {
        super();
        this.id = 0;
    }
}
let DerivedFromProtectedInstance = new DerivedFromProtected();
// DerivedFromProtected.id = 10; protected id cannot be accessed from outside the class.
