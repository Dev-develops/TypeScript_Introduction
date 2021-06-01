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

person.printHobbies();

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

person_arrow.printHobbies();