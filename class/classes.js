class Human {
  constructor() {
    this.gender = 'male';
  }


    printGender() {
        console.log(this.gender);
    }   
}
//extends key to inherits class
class Person extends Human {
 
 //we need a constructor to access the constructor of the inhereted class
  constructor() {
    super();
    this.name = 'Joe';
    this.gender = 'female'
  }
  
  printMyName() {
    console.log(this.name);
  }
  
  
}

//invoke or instantiate a class
const person = new Person();
person.printMyName();
person.printGender();


const joe = new Human();
joe.printGender();