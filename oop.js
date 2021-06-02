// Interface definition can be applied to a variable.
// No code is generated for interfaces in TS, it is only used by the compiler
// to perform type checking.
let complexVariable = { id: 1, name: 'Devendra' };
let point = { x: 2, y: 2 };
// point.x = 4; // changes the value and will cause the error
// variables use const and property use readonly.
// Classes
class firstClass {
    print() {
        console.log(`Simple Class.print() called!`);
        console.log(`SimpleClass has id: ${this.id}`);
    }
}
// this keyword is used to use the property of a class within itself
let myFirstClass = new firstClass();
myFirstClass.id = 1234;
myFirstClass.print();
function printClass(a) {
    console.log(a);
    return null;
}
class ClassA {
    print() {
        console.log('ClassA.print()');
    }
}
class ClassB {
    print() {
        console.log('ClassB.print()');
    }
}
let classA = new ClassA();
classA.print();
let classB = new ClassB();
classB.print();
