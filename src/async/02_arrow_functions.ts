namespace arrow_functions_demo {
  class Person {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
    /**
     * greet
     */
    public greet() {
      console.log(`Hi! My name is ${this._name}`);
    }
  }
  let person = new Person('remo');
  person.greet();
}

namespace arrow_functions_demo2{
  class Person {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
    /**
     * greet
     */
    public greet() {
      alert(`Hi! My name is ${this._name}`);
    }

    /**
     * greetDelay
     */
    public greetDelay(time:number) {
      setTimeout(function(){
        alert(`Hi! My name is ${this._name}`); // Error
      }, time);
    }

  }

  let person = new Person('remo');
  person.greetDelay(1000);
}

namespace arrow_functions_demo3 {
  class Person {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
    /**
     * greet
     */
    public greet() {
      alert(`Hi! My name is ${this._name}`);
    }
    /**
     * greetDelay
     */
    public greetDelay(time: number) {
      setTimeout(() => {
        alert(`Hi! My name is ${this._name}`);
      }, time);
    }
  }
}