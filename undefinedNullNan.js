
// Both are falsy value so ans is true;
console.log(undefined==null)
// both datatype diffrent so its value false 
console.log(undefined===null)
// null is boject 
console.log(typeof(undefined),typeof(null))

// Nan is a property of  global object in other word it is a variable of global scope
console.log(NaN===NaN)

console.log(Number.isNaN("abhishek"))

// array is basicaly refrence type so it is like a boject 
console.log([]==[])

// boject is pass by refrence so basically obj holding a address so both objects are memory diffrent
console.log({}=={})