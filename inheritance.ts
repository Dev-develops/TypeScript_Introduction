// A class can have only one base class, but can implement multiple interfaces

interface iBase {
    id: number;
}

interface iDerivedBase extends iBase{
    name: String;
}

// the second interface extends the first interface
// multiple interfaces implemented using ,
class interfaceInheritance implements iDerivedBase, iBase {
    id: number;
    name: string;
}

// Constructor loading -> the constructor of the derived class loads the constructor of the super class
class baseClassWithConstructor {
    private id: number;
    constructor (_id: number ){
        this.id = _id;
    }
}

class derivedClassWithConstructor extends baseClassWithConstructor{
    private name: string;
    constructor(_id: number, _name: string) {
        super(_id);
        this.name = _name;
    }
}