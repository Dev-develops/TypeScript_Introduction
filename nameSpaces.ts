// Namespaces

namespace firstNameSpace {
    class notExported {

    }

    export class nameSpaceClass {
        id: number;
    }
}

namespace secondNameSpace {
    export class nameSpaceClass {
        name: string;
    }
}

let firstNameSpaceInstance = new firstNameSpace.nameSpaceClass();
// let notExportedInstance = new firstNameSpace.notExported(); because its not exported so its not available outside the namespace.

let secondNameSpace = new secondNameSpace.nameSpaceClass();