let people = [
  { name: "Gowtham", age: 20 },
  { name: "Varun", age: 17 },
  { name: "Hello", age: 19 },
];

const calcualteAverageAge = (people) =>{
    let sum=0;
    people.forEach((person)=>{
        sum+=person.age;
    })
    const age = sum/people.length;
    return age;
}

console.log(calcualteAverageAge(people));