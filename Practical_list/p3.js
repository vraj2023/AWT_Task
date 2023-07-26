// ECMASCRIPT 6

// -------------------------- var--------------

var x =10;

function fun(){

    var y=20;
    // console.log(y);
    // console.log(x);
}
fun();
// console.log(x);
// console.log(y);

var a = "20";
var a = "30";  //redeclaration and redefine are possible in var datatype
// console.log(a);

//-------------------------------let------------------

// let  x = 10;
// Here x is 10
{  
    // in this scope we cant get value 10;
    // console.log(x); 
  let x = 2;
//   x =4;
//   console.log(x);
  // Here x is 2/4
}
// Here x is 10
// console.log(x); 

// ------------------------- const --------------------

var  x = 10;
// Here x is 10
{  
  const x = 2;
  // Here x is 2
}
// Here x is 10


// ------------------- spread operator -------------

function sum(x, y, z) {
    return x + y + z;
  }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
  // Expected output: 6
  
//   console.log(sum.apply(null, numbers));
  // Expected output: 6

//   const obj = { key1: "value1" };
//   const array = [...obj]; // TypeError: obj is not iterable

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// function myFunction(v, w, x, y, z) {
//     console.log(y);
//     console.log(z);
// }
// const args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);  // we can use multiple time use spread operator

// const numbers = [23,55,21,87,56];
// let maxValue = Math.max(...numbers);



