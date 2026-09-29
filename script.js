console.log('This is an Internal JS');

let name = 'Rahul';
const city = 'Mysuru';
const year = 2026;

console.log(name, city,year);

//Functions
function greet() {
    console.log("hello");
}

greet('Rahul');
function greet(name){
    console.log('Hello! ' + name);
}

//Function Expresion
const add =function(a,b){
    return a+b;

}
console.log(add(25,25));

//arrow fun
const greeting = (name) => {
    return 'Hi ' + name;
};
console.log(greeting('Rahul'));

const p = document.querySelectorAll('#text');
//p.textContent = 'Updated Text';

p.innerHTML = '<i>Updated Text</i>' 