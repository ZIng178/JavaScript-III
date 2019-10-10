/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding

Implicit Binding occurs when the dot notation is used to invoke a function. In Implict Binding the this keyword refers to the left of the dot whenever a function invocation occurs. 

* 2. Explicit Binding.
 
Explicit Binding allows us to explicitly state what the this keyword is in any given function by using methods such as .call(), .bind() and .apply(). In Explicit binding we can invoke functions from the global scope. 

* 3. new Binding

The new Binding creates a new object when a constructor function is invoked . 

* 4. 
window Binding.

When we invoke a function that uses a this keyword without any of principles of implicit , Explicit or new Binding the this keyword by default is assigned to the window object . 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Implicit Binding
const me ={
    name :"Wangdi",
    age : 20,
    sayName: function(){
     console.log (this.name);
    }
}

me.sayName();

// Principle 2

// code example for Explicit Binding
  ///          Using call.   ////
  var sayName = function (){
    console.log ("My name is" + " "+ this.name)
}

var Wangdi={
    name : "Wangdi",
    age : 30
};

sayName.call(Wangdi)

////// Using call while passing an argument through the function /////

var sayName = function (lang1,lang2,lang3){
    console.log ("My name is" +" "+ this.name + " " +"and i know " + lang1 + " " + lang2 + " " + lang3)
}

var Wangdi={
    name : "Wangdi",
    age : 30
};

let langauges=["Hindi", "Nepali", "Tibetan", "Urdu", "Bangla", "English"];

sayName.call(Wangdi, langauges[0], langauges[1], langauges[2]);

////  The apply method allows you pass the array of the arguments and JavaScript automatically does the parsing for us .


sayName.apply (Wangdi, langauges);


// The bind method return a new function istead of invoking the original function 

var newFn =sayName.bind(Wangdi, langauges[0], langauges[1], langauges[2]);


/*The .call and .aplly methods are very similar where the function is immediately invoked the only difference between the two 
is that while using . call we pass in the arguments one by one , whereas while using .apply we can pass in the whole array as an argument 

The .bind method is similar to the .call method where in you pass the arguments one by one but instead of invoking the function right away it returns a brand new function which we can return later . */



// Principle 3

// code example for New Binding

// Constructor function
var Shoes =function (name,color,type){
    this.name =name;
    this.color=color;
    this.type=type;
}

// creating a new object by invoking the Shoe constructor function .
var shoes= new Shoes("Adiddas", "White", "Sneaker");


// Principle 4

// code example for window Binding 

// var sayAge=function(){
//     console.log(this.age);
// }

// var me={
//     age:25
// };

// var you ={
//     age:25
// }

// window.age=40;

// sayAge();
