// alert("Hello World");

// //log to console
// console.log('hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello World';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1,b:2});
// console.table({a:1,b:2});


// console.error("This is an error");
// //console.clear();
// console.warn("This is an warning");
// console.time("Hello");
// console.log('hello World');
// console.log('hello World');
// console.log('hello World');
// console.log('hello World');
// console.timeEnd("Hello");



//-------------------------------------section 2------------------------------------------
                                    //VARIABLES

// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// const person = {
//     name: 'John',
//     age: 30
//   }
  
//   person.name = 'Sara';
//   person.age = 32;
  
//   // console.log(person);
  
//   const numbers = [1,2,3,4,5];
//   numbers.push(6);
  
//   console.log(numbers);


//-------------------------------------------section 3 -------------------------------------------
                                    //DATATYPE

                                // // PRIMITIVE

// // String
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();


                    // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date();s
// console.log(today);
// console.log(typeof today);



//-----------------------------------------------section-4-------------------------------
                                       
                                          // TYPE CONVERSION

// let val;

// // Number to string
// val = String(555);
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// // Output
// // console.log(val);
// // console.log(typeof val);
// // //console.log(val.length);
// // console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

         
//--------------------------------------------------section-5-------------------------------------

                                        // Number and math Object

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


//--------------------------------------------------section-6-------------------------------
                                        //String

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web design,web development,programming';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val =  'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat()
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Brad', 'Jack');

// // includes()
// val = str.includes('foo');

// console.log(val);

                                        
//---------------------------------------------------------section -6 ------------------------
                                          // template Literals
                                        //   const name = 'John';
                                        //   const age = 31;
                                        //   const job = 'Web Developer';
                                        //   const city = 'Miami';
                                        //   let html;
                                          
                                        //   // Without template strings (es5)
                                        //   html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';
                                          
                                        //   html = '<ul>' +
                                        //          '<li>Name: ' + name + '</li>' +
                                        //          '<li>Age: ' + age + '</li>' +
                                        //          '<li>Job: ' + job + '</li>' +
                                        //          '<li>City: ' + city + '</li>' +
                                        //          '</ul>';
                                          
                                        //   function hello(){
                                        //     return 'hello';
                                        //   }
                                          
                                        //   // With template strings (es6)
                                        //   html = `
                                        //     <ul>
                                        //       <li>Name: ${name}</li>
                                        //       <li>Age: ${age}</li>
                                        //       <li>Job: ${job}</li>
                                        //       <li>City: ${city}</li>
                                        //       <li>${2 + 2}</li>
                                        //       <li>${hello()}</li>
                                        //       <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
                                        //     </ul>
                                        //   `;
                                          
                                        //   document.body.innerHTML = html;

//-----------------------------------------------------------section -7----------------------------------------------
                                              //  Arrays and Arrays Methods

                                              // Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1,3);
// // // Reverse
// // numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // // Use the "compare function"
// // val = numbers.sort(function(x, y){
// //   return x - y;
// // });

// // // Reverse sort
// // val = numbers.sort(function(x, y){
// //   return y - x;
// // });

// // Find
// function over50(num){
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);
