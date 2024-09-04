const student = {
    name:"Gowtham",
    age:19,
    email:"gowthamvvss@gmail.com",
    greet: ()=>{
        return "Hello,"+ student.name+"!";
    },
    address: {
        country: "India",
        city: "Vizag",
        pin_code: 530012
    }
};

console.log(student);

student.age = 10;
console.log(student);
console.log(student.age);

console.log(student.greet())

console.log(student);
student.address.pin_code=535183
console.log(student);

const topper = {
    age:17,
    email:"varun22@gmail.com",
    greet: ()=>{
        return "Hello,"+ topper.name+"!";
    },
}

console.log(topper);

class Student{
    constructor(name,email,age,country,city,pin_code){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
        this.greet = () =>{
            return "Hello,"+this.name+"!"
        };
        this.getFullAddress = () => {
            return this.address.country+", "+this.address.city+" - "+this.address.pin_code
        }
    }
}

const object1 = new Student("Gowtham","gowthamvvss@gmail.com",20,"India","Vizag",530012);
const object2 = new Student("Varun","varun22@gmail.com",17,"India","Vizag",530012);

console.log(object1.greet());
console.log(object2.greet());
console.log(object1.getFullAddress());
console.log(object2.getFullAddress());