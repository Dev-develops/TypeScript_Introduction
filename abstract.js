// Abstract Class
// provides similar functionality for a group of similar classes
class abstractEmployee {
    printDetails() {
        console.log(this.getDetails());
    }
}
class NewEmployee extends abstractEmployee {
    getDetails() {
        return `id: ${this.id}, name: ${this.name}`;
    }
}
class newManager extends NewEmployee {
    getDetails() {
        return super.getDetails() + `, Employee Count ${this.Employees.length}`;
    }
}
let employee = new NewEmployee();
employee.id = 1;
employee.name = 'Employee Name';
employee.printDetails();
let manager = new newManager();
manager.id = 2;
manager.name = "New Manager";
manager.Employees = [];
manager.printDetails();
