// Generics
function identity(args) {
    return args;
}
function identityAny(args) {
    return args;
}
// Lose of the argument type.
// Generic functions
// <T> preserves and sets the return type to that type 
function identityGenerics(args) {
    return args;
}
let a = identityGenerics("Devendra");
let b = identityGenerics("Test");
class GenericClass {
}
