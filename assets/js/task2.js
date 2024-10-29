let json = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`

const data = JSON.parse(json);

const result = {
    name: data.name,
    age: data.age,
    skills: [data.skills[0], data.skills[1],data.skills[2]],
    salary: data.salary,
};

console.log('Task2');
console.log(result);