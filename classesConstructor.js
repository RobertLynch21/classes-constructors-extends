// Practicing with classes the constructor method and extending classes


class Human {
    constructor() {
      this.gender = "Male";
    }
    printGender() {
      console.log(this.gender);
    }
  }
  
  class Person extends Human {
    constructor() {
      super();
      this.name = "Robert";
    }
    printMyName() {
      console.log(this.name);
    }
  }
  
  class Size extends Person {
    constructor() {
      super();
      this.height = "Tall";
    }
    printMyHeight() {
      console.log(this.height);
    }
  }
  
  const size = new Size();
  size.printMyName();
  size.printGender();
  size.printMyHeight();