

let x = 10;
x = 20; 
console.log("X : ",x);

const y = 5;
console.log("Y : ",y);

function add(num1, num2) {
    return num1 + num2;
  }
  console.log("Regular function : ",add(1,2));
  
  hello = () => {
    return "Hello World!";
  }

const arr1 = [1, "Vraj",3.14];
console.log("without spread ... of : ",arr1);
const arr2 = [...arr1, true, 5];
console.log("With spread ... of : ",arr2);

const arr = [1, "Vraj", 3.14];
console.log("Array : ",arr);
console.log("for/of ");
for (const element of arr) {
  console.log(element);
}

console.log("map objects ");
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));

map1.set('a', 97);

console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b');

console.log(map1.size);
console.log("\n Set objects ");
const mySet = new Set();

mySet.add(1); 
mySet.add(5); 
mySet.add(5.5); 
mySet.add("Vraj"); 
console.log(mySet);

console.log("\nclasses ");
class Vraj {
    constructor(name) {
      this.name = name;
    }
  
    greeting() {
      console.log(`Hello, i am ${this.name}`);
    }
  }
  
  const person = new Vraj('Vraj');
  person.greeting();
  
  console.log("\npromises");
  function fetchData() {
    return new Promise((resolve, reject) => {
        const data = "resolved data";
        resolve(data);
    });
  }

  fetchData()
    .then((result)=>console.log(result))
    .catch((error)=> console.error(error));
  

console.log("\nSymbol ");
const sym = Symbol('description');
console.log(sym); 



console.log("\ndefault parameters ");
function greet(name = 'Anonymous') {
    console.log(`Hello, ${name}`);
  }
  
  greet(); 
  greet('Vraj'); 

  console.log("\nfunction rest parameters ");
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); 
  