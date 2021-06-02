// Generics

function identity(args: number) : number {
    return args;
}

function identityAny(args: number) : number {
    return args;
}

// Lose of the argument type.

// Generic functions
// <T> preserves and sets the return type to that type 
function identityGenerics<T>(args: T): T {
    return args;
}
let a = identityGenerics("Devendra");
let b = identityGenerics<string>("Test");

// the type defined explicitly to a generic function must have the same type as the one declared inside.