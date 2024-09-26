import "./style.css";

class person {
  constructor(name, age, firstName) {
    this.name = name;
    this.age = age;
    this.firstName = firstName;
  }
}

const user = new person("Ilyas", 23, "Yukhigov");

console.log(user);
