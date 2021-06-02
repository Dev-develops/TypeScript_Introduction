// Namespaces
var firstNameSpace;
(function (firstNameSpace) {
    class notExported {
    }
    class nameSpaceClass {
    }
    firstNameSpace.nameSpaceClass = nameSpaceClass;
})(firstNameSpace || (firstNameSpace = {}));
var secondNameSpace;
(function (secondNameSpace) {
    class nameSpaceClass {
    }
    secondNameSpace.nameSpaceClass = nameSpaceClass;
})(secondNameSpace || (secondNameSpace = {}));
let firstNameSpaceInstance = new firstNameSpace.nameSpaceClass();
// let notExportedInstance = new firstNameSpace.notExported(); because its not exported so its not available outside the namespace.
let secondNameSpace = new secondNameSpace.nameSpaceClass();
