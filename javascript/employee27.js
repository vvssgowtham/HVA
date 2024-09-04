class Employee {
  constructor(name, email, age, department, position, salary) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
    this.introduce = () => {
      console.log("Hello, I am " + this.name + ", " + this.position + ".");
    };
    this.displaySalary = () => {
      console.log("Salary: $" + this.salary + ".");
    };
  }
}

const newEmployee = new Employee(
  "Gowtham",
  "gowthamvvss@gmail.com",
  20,
  "Development",
  "SDE-3",
  5000
);
const manager = new Employee(
  "Varun",
  "varun22@gmail.com",
  17,
  "Development",
  "SDE-1",
  6000
);

console.log(newEmployee.name + " " + newEmployee.position);
newEmployee.displaySalary();
console.log(manager.name + " " + manager.position);
manager.displaySalary();