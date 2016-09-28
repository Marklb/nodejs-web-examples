# ES2015 Notes

ES2015 is just the latest version of the Javascript language to be approved by ECMA International, which is the standards group responsible for vetting and approving different versions of the
language. So, really it is still Javascript, it just adds improvements to the language. The reason we need to compile it using a compiler like babel is because not all Javascript interpreters have fully implemented all the new features, so babel will translate the ES2015 syntax into the older Javascript standard that about all Javascript interpreters recognize. In a file that uses the ES2015 syntax you can still use basically all the old syntax along with it still without problems, just now you have the option of using the new syntax also.  

In this document I will show some examples of why I use it instead of just using the current syntax that doesn't need to be compiled.  


### Let & Const  
In the current Javascript variables are defined using ```var```, but in ES2015 we now have two new ways to define variables ```let``` and ```const```. ```Let``` is the new ```var```, so you can just use ```let``` instead of ```var```. ```const``` is single-assignment, so once you set a ```const``` variable it can't be modified and it can't be used before it is assigned.

One of the improvements provided by ```let``` is that it is block scoped.  
**Current Javascript**
```javascript
{
  var city = 'New Jersey';
}
console.log(city); // output: New Jersey
```

**ES2015**
```javascript
{
  let city = 'New Jersey';
}
console.log(city); // Uncaught ReferenceError: city is not defined
```


### Arrow Functions  
For the most part this is just a small improvement to the function syntax. It has some differences in how it handles a few features, such as scope, but I will mention that after a small example of the difference in the syntax.  

*Note*: Since Javascript doesn't have a very strong syntax standard this isn't the only way to write a function in Javascript, just the common way it is usually defined.  

**Current Javascript Function**
```javascript
var myAdd = function(a, b) {
  return a + b;
};
```

**ES2015 Arrow Function**
```javascript
let myAdd = (a, b) => {
  return a + b;
};
```

Arrow functions that the same ```this``` as their surrounding code which makes writing functions within objects much nicer. If you don't know much about Javascript objects scope where you use ```this``` then this won't make much sense yet. I think of it kinda like how you use ```this``` in Java objects. There are ways to get this functionality in current Javascript a few different ways like calling ```.bind(this)``` on your function, but its easier to just use an Arrow function.  


### Classes  
In the current Javascript you have to use the prototype-based OO pattern, which isn't really that hard to write, but when you want to extend that is when it gets kind of weird. To make and instance in Javascript you call a function with the ```new``` operator.

**Current Javascript Prototype**
```javascript
// This is not the only way to make something like a class in Javascript,
// but this is one of the common ways
var Animal = function(name, age){
  this.name = name;
  this.age = age;
};

Animal.prototype.getName = function() {
  return this.name;
};

Animal.prototype.getAge = function() {
  return this.age;
};

Animal.eat = function() {
  console.log(name + ' is eating food.');
};


// To use this prototype
var myAnimal = new Animal("Fluffy", 5);
myAnimal.eat(); // output: "Fluffy is eating food."
```

**ES2015 Class**
```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  eat() {
    console.log(this.name + ' is eating food.');
  }
}

// To use this class
let myAnimal = new Animal("Fluffy", 5);
myAnimal.eat(); // output: "Fluffy is eating food."
```

Honestly I don't remember a good way to implement inheritance in Javascript, because it has been so long since I have done it and usually just looked up some function someone else wrote to do it for me, so I will just show how it is done with ES2015.  

**ES2015 Class Inheritance**
```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  eat() {
    console.log(this.name + ' is eating food.');
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  eat() {
    console.log(this.name + ' is eating dog food.');
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  eat() {
    console.log(this.name + ' is eating cat food.');
  }
}

// Usage
let myAnimal = new Animal("Fluffy", 5);
myAnimal.eat(); // output: "Fluffy is eating food."

let myDog = new Animal("Fluffy", 5);
myDog.eat(); // output: "Fluffy is eating dog food."

let myCat = new Animal("Fluffy", 5);
myCat.eat(); // output: "Fluffy is eating cat food."
```


### Template Literals  
In current Javascript to concatenate strings you use the ```+``` operator. ES2015 simplifies this with template strings.  

**Current Javascript**
```javascript
// you can define strings with " " or ' '
var name = 'Mark';
var age = 25;

var s = 'My name is ' + name + ' and I am ' + age + ' years old.';
console.log(s); // output: My name is Mark and I am 25 years old.

// Multi-line string
var line = 'I am on line one\nI am on line two';
```

**ES2015**
```javascript
let name = 'Mark';
let age = 25;

let s = `My name is ${name} and I am ${age} years old.`;
console.log(s); // output: My name is Mark and I am 25 years old.

// You can also do stuff with the variables with this syntax
let s2 = `My name is ${name} and I am ${age + 10} years old.`;
console.log(s2); // output: My name is Mark and I am 35 years old.

// Multi-line string
let line = `I am on line one
I am on line two`;
```




There are a lot more improvements, but these are the ones I use the most. For better more detailed explanations and examples you can check out many other websites. I find most of the posts on css-tricks.com to be easy to understand, but there are a lot of other sites that got into deeper explanation of the syntax.  
Here is a easy to follow post about ES2015: https://css-tricks.com/lets-learn-es2015/
