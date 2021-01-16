class Person {
    age = 35

    logAge () {
        console.log(this.age);                                  /*regular function-ben this = az object nevével*/
        // Log out the object's age
    }

    logAgeArrow = () => {                                       
        this.logAge();                                          /*arrow functionben magában nem működik a this, kell hozzá egy regular function és az ebben lévő műveletet indítja el */
        // Log out the object's age
    }
}

const object = new Person();

console.log("Simple function declaration in class");
const defaultfunction = object.logAge();
console.log("Arrow function declaration in class");
const ArrowFunction = object.logAgeArrow();
