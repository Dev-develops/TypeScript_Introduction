// Abstract Class
// provides similar functionality for a group of similar classes

abstract class abstractEmployee {
    public id: number;
    public name: string;
    abstract getDetails(): string; // mandatory for the classes inheriting from this abstract class

    printDetails() {
        console.log(this.getDetails());
    }
}

class NewEmployee extends abstractEmployee{
    getDetails(): string {
        return `id: ${this.id}, name: ${this.name}`
    }
}

class newManager extends NewEmployee {
    public Employees: string[];
    getDetails(): string{
        return super.getDetails() + `, Employee Count ${this.Employees.length}`
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