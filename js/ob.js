//oop not ob
/*function User(name,email,role) {
    this.name = name;
    this.email = email;
    this.role = role;
}

User.prototype.sayHi = function (){

    console.log(`Hi. I am ${this.name}. My email is ${this.email}. 
    My user role is ${this.role}`)
}; // deti su konsoles button

User.prototype.showRole = function (){
    console.log(`Hi. I am ${this.name} and my role is ${this.role}`)
}
 */

/*class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    sayHi(){
        console.log(`Hi. I am ${this.name}. My email is ${this.email}. 
        My user role is ${this.role}`)
    }
    showRole(){
        console.log(`Hi. I am ${this.name} and my role is ${this.role}`)
    }
}


const userOne = new User('Vardenis', 'Pavardenis', 'Admin'); //Object instance\
userOne.sayHi();
userOne.showRole();
const userTwo = new User('Petras', 'Petraitis','Student');
userTwo.sayHi();
userTwo.showRole();

console.log(userOne);*/

class Registration{
    constructor(fault, name, description) {
        this.fault = fault;
        this.name = name;
        this.description = description;
    }
    showFault(){
        console.log(`Fault: ${this.fault}`)
    }
    showRegistration(){
        console.log(`Fault Name : ${this.name}, Description: ${this.description}`)
    }
    currentDate(){
        console.log(date)
    }
    priorityTrue(){
        console.log("Priority task: " + priority.toString());
    }
    priorityFalse(){
        console.log("Priority Task: " + false.toString());
    }
}

const name = new Set();
    name.add("Black-screen when pc is on")
    name.add("Mobile phone not recognising my inputs")

const description = new Set();
    description.add("I do not get any video when i turn on my pc, could be a GPU issue");
    description.add("My phone no longer recognises any of my touch inputs.")

const priority = new Boolean(true);

const date = new Date();

const faultOne = new Registration("PC", "Black-screen when pc is on", "I do not get any video" +
    "when i turn on my pc, could be a GPU issue",);
const faultTwo = new Registration("Mobile", "Mobile phone not recognising my inputs", "My phone no" +
    "longer recognises any of my touch inputs.");
faultOne.showFault();
faultOne.showRegistration();
faultOne.priorityTrue();
faultOne.currentDate();

faultTwo.showFault();
faultTwo.showRegistration();
faultTwo.priorityFalse();
faultTwo.currentDate();
