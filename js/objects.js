const person = {
    age: 35,
    logAge: function () {                   /*object function call esetében a this = az object nevével*/
        console.log(this.age);
        //Log out the object's age
    }
}

function logReferenceObjectsAge() {         /*object function REFERENCE call esetében a this = az object function {törzsében lévő utasítással} */
   const logAge = person.logAge(this);
    /*logAge(this);*/
}

console.log("Object's function call");
person.logAge();
console.log("Object's function's reference call");
logReferenceObjectsAge();
