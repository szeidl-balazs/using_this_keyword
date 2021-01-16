function init() {
    const button = document.querySelector(".click-btn");
    logButtonAsArrowFunction(button);
    logButtonAsDeclaredFunction(button);
}

function logButtonAsArrowFunction(button) {                  /*a függvény paramétere a gomb, amit átad az eseményfigyelőnek, mely elindítja a console.log-ot a click a gombon esemény hatására*/
    button.addEventListener("click", (event) => {
        console.log("Arrow function output: ");
        console.log(button);                                   /*arrow function nem tudja kezelni a this-t, csak úgy, hogy egy regular function-t indít az arrow function és azt tudja a this-t kezelni, de akkor, ha az egy object metódus */
        // Log out the button element
    });
}

function logButtonAsDeclaredFunction(button) {               /*a függvény paramétere a gomb, amelyet átad az eseményfigyelőnek és ez elindítja a clickHandler függvényt clickre, ami elindítja a console.log-ot*/
    button.addEventListener("click", clickHandler);
}

function clickHandler() {
    console.log("Declared function output:");        /*a this azt a paramétert jelenti, amit az eseményfigyelő figyel és amit a függvényétől kap*/
    console.log(this);
    // Log out the button element
}

init()
