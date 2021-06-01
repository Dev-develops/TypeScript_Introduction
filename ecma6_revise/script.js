// Important scope definition doubt clearances and explanations. 
// Uncomment the function and console log calls that you want to use.

//Binding solving the scope issues.
// creating a var variable inside the function and using it inside the printHobbies also resolves the issues.
var person = {
    name: 'john',
    hobbies: ['programming', 'javascript', 'fishing', 'revise_ICE'],
    printHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            var str = this.name + " likes " + hobby;
            console.log(str);
        }.bind(this))
    }
}

// person.printHobbies();

//Arrow function solving the "this" scope issue errors.
var person_arrow = {
    name: 'dev',
    hobbies: ['writing', 'reading', 'technological blogs'],
    printHobbies() {
        this.hobbies.forEach((hobby) => {
            var str = this.name + " likes " + hobby;
            console.log(str)
        })
    }
}

// person_arrow.printHobbies();

//Destructing in ECMA6
var [first, , last] = ['javascript', 'java', 'node.js'];
// console.log(first);
// console.log(last);

// Generator Functions
// Special types of function that pause on a particular statement and return the value

function* myFunction(i) {
    yield i;
    yield i + 5;
}

var gen = myFunction(10);

// console.log(gen.next());
// console.log(gen.next());

// Class - ES6
class personClass {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

class student extends personClass {
    constructor(school, grade) {
            super('Devendra', 20, 'Studying');

            this.school = school;
            this.grade = grade;
        }
        // getters and setters function

    getAge() {
        return this.age
    }
    setName(name) {
        this.name = name;
    }
}

let dev = new student('EE', 3);
// console.log(dev);