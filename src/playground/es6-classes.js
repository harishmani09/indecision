// class Person {

//     constructor(name='Anonymous') {
//         this.name = name;
//     }
//     getGreeting() {
//         return ` i am ${this.name}`;
//     }

// }

// const me = new Person('Harish Mani');
// console.log(me.getGreeting());

// const other = new Person();
// console.log(other.getGreeting());

class Human{

constructor(name="Anonymous", age=0) {
    this.name = name;
    this.age = age;
} 
getGreeting() {

    return `I am ${this.name}`

}

getDescription() {
    return ` ${this.name} is ${this.age}'s old `;
}

}


class Student extends Human {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !this.major;
    }
    getDescription () {
     let description = super.getDescription();
    
    if (this.hasMajor()) {
        description += `  Their major is ${this.major}`;
    }


     return description;
    }

}

class Traveller extends Human {

    constructor(name, age, homeLocation) {
            super(name, age);
            this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += `. My homelocation is ${this.homeLocation}`

        }
        return greeting;
    }
}




const me = new Traveller('sonu', 35, 'Jamshedpur')
const baby = new Traveller();
console.log(me.getGreeting());
console.log(baby.getGreeting());
