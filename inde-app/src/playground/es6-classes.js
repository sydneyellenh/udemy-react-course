
class Person{
    constructor(name, location, age){
        this.name = name || 'Anonymous';
        // this.location = location;
        this.age = age || 0;
    }

    getGreeting(){
        return `${this.name} says "Hello!"`;
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

class Employee extends Student{

    constructor(name, age, major, career){
        super(name, age, major);

        this.career = career || 'No Job';
    }

    getCareer(){
        // let career = 
        return `${this.name} has the career of ${this.career}`;
    }
}

const me = new Student('Sydney', 21, 'English', 'Web Developer');
console.log('Me = ' + me);
console.log('Me.getGreeting() = ' + me.getGreeting());
console.log('Me.GetDescription() = ' + me.getDescription());
console.log('Me.hasMajor() = ' + me.hasMajor());
// console.log('Me.hasCareer() = ' + me.hasMajor());
console.log('Me.hasCareer() = ' + me.getCareer()); 

// const you = new Person();

// console.log(you);
// console.log(you.getGreeting());
// console.log(you.getAg());