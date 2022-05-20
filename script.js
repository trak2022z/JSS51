'use strict';
(function() {
    window.addEventListener('load', init);

async    function init() {

function orderExecutor(resolve, reject) {
    console.log('making our pizza...');
    setTimeout(function() {
        resolve("Here's your pizza!");
    }, 5000);
}

function eatExecutor(resolve, reject) {
    console.log('eating our pizza...');
    setTimeout(resolve, 3000);
}

async function eat() { // don't need async here...why not?
    return new Promise(eatExecutor);
}

let pizza = await new Promise(orderExecutor); 
let eatingResult = await eat(pizza); 
console.log('Paying the bill!');
    }

})();








    



