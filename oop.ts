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
    x: number;
    y: number;
}

let point : Point = { x: 2, y: 2};
point.x = 4;