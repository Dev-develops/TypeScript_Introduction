// Interface definition can be applied to a variable.
// No code is generated for interfaces in TS, it is only used by the compiler
// to perform type checking.

interface iComplexType {
    id: number;
    name?: string; // optional property of an interface.
}

let complexVariable : iComplexType = {id: 1, name: 'Devendra'};
// both the variables must be present otherwise the errors are thrown

// Readonly Interface

interface Point {
    readonly x: number;
    y: number;
}

let point : Point = { x: 2, y: 2};
// point.x = 4; // changes the value and will cause the error
// variables use const and property use readonly.

// Classes
class firstClass {
    id: number;
    print() : void {
        console.log(`Simple Class.print() called!`);
        console.log(`SimpleClass has id: ${this.id}`);
    }
}

// this keyword is used to use the property of a class within itself

let myFirstClass = new firstClass();

myFirstClass.id = 1234;
myFirstClass.print();

// Interfaces are just the definition and the classes are the implementation along with the definition.
// Implementing Interfaces in classes

interface iPrint{
    print();
}

function printClass(a: iPrint){
    console.log(a);
    return null;
}

class ClassA implements iPrint{
    print() {
        console.log('ClassA.print()');
    }
}
class ClassB implements iPrint{
    print() {
        console.log('ClassB.print()');
    }
}

let classA = new ClassA();
classA.print();
let classB = new ClassB()
classB.print();