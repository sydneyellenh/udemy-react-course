
class Person{
    constructor(name, age, location){
        this.name = name || 'Anonymous';
        // this.location = location;
        this.age = age || 0;
    }

    getGreeting(){
        return ` Hello!  My name is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
};

class Student extends Person{

    constructor(name, age, major){
        super(name, age);
        this.major = major || 'Undecided';
    }

    hasMajor(){
     return !!this.major;    
    }

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description = description += ` and her major is ${this.major}.`;
        }
        return description;
    }
};

class Traveler extends Person{

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation || "a cardboard box";
    }

    getGreeting(){
        let greeting = super.getGreeting();

            greeting = greeting += `. I am visiting from ${this.homeLocation}.`;

        return greeting;
    }

}


const me = new Traveler('Sydney', 21, 'Indianapolis');
console.log('Me = ' + me);
console.log('Me.getGreeting() = ' + me.getGreeting());
console.log('Me.GetDescription() = ' + me.getDescription());
// console.log('Me.hasMajor() = ' + me.hasMajor());
console.log('Me.getGreeting(homeLocation) = ' + me.getGreeting());
// console.log('Me.hasCareer() = ' + me.hasMajor());

// const you = new Person();

// console.log(you);
// console.log(you.getGreeting());
// console.log(you.getAg());