//Generating database array
let agenda =[];
function addEntry(day, events, didIParticipate){
  agenda.push({
    day: day,
    events: events,
    presence: didIParticipate
  });
}

addEntry('16-03-2018',['running', 'climbing', 'learning'], false);
addEntry('17-03-2018',['swimming', 'running', 'learning'], true);
addEntry('18-03-2018', ['shopping', 'playing with children'], true);
addEntry('19-03-2018', ['swimming', 'learning'], false);
addEntry('20-03-2018', ['playing the instrument', 'cycling', 'learning'], true);

//Checking if a certain event took place on a certain day

function hasEvent(event, entry){
  return entry.events.indexOf(event) !== -1;
}

//Counting frequendy of a certain event

function frequency(event, agenda){
  let freq = 0;
  for(let i = 0; i < agenda.length; i++){
    let entry = agenda[i];
    if (hasEvent(event, entry)){
      freq+=1;
     }
  }
  return freq;
}

//------------------------------------------------------------
//Using objects as maps \ functions towards dynamic database generating

let map = {};
function storeHeight(name, height){
  map[name] = height;
}

storeHeight('adam', 170);
storeHeight('bartosz', 175);
storeHeight('cecylia', 165);
storeHeight('dariusz', 180);
storeHeight("eugenia", 160);

//Checking if a certain person is already inside map..

/*console.log('mariusz' in map);*/

//Making raport via "for in" loop

for (let name in map){
  console.log(('The height of ' + name + ' is: ' + map[name] + '.' ));
}

//--------------------------------------------------------------------

//Searching through the object with a view to generating new one

let measureSatisfaction = (event) => {
  return event.length * 2;
}

let gatherSatisfactionCoefficients = (agenda) => {
  let coefficients = {};
  for (let entry = 0; entry < agenda.length; entry++){
    let events = agenda[entry].events;
    for (let i = 0; i < events.length; i++){
      let event = events[i];
      if (!(event in coefficients)){
        coefficients[event] = measureSatisfaction(event);
      }
    }
  }; 
  return coefficients;
}
console.log(gatherSatisfactionCoefficients(agenda));

//Deleting an entry with the given index from the array

function removeEntry(array, index){
  return array.slice(0, index).concat(array.slice(index + 1));
}

//Another version of addEntry function, dynamic datainput into the agenda array, using arguments property...
function addEntry1(day, events, presence){
  let entry = {
    day: arguments[0],
    events: [],
    presence: arguments[arguments.length - 1]
  };
  for (let i = 1; i < arguments.length - 1; i++){
    entry.events.push(arguments[i]);
  }
  agenda.push(entry)
  }
  addEntry1('25-03-2018', "learning", "playing the intrument", "walking", true);
  addEntry1('24-03-2018', "shopping", false);

  console.log(agenda);
//-------------------------------------------EXERCISES-------UP TO CHAPTER 5--------------------------------------------

//Chess board
function drawChessBoard(size){
  let string = "";
  let i = 1, s = size;
  while (i <= Math.pow(s, 2) + s -1){
    if (i % (s + 1) === 0){
      string = string + "\n";
    } else if (i % 2 !== 0){
      string = string + " ";
    } else if (i % 2 === 0){
      string = string + "#";
    }
  i++;
  }
  console.log(string);
}
drawChessBoard(20);

//Recursion way of checking whether the number is odd or even
function isEven(number){
  var answer = !Boolean(number);
  if (number === 0){
    console.log(answer);
  } else if (Math.abs(number) === 1){
    console.log(answer);
  } else isEven(Math.abs(number)-2);
}

//Counting how many times a given character repeats in the indicated word...

function countChar(string, character){
  let counter = 0, i = 0;
  while (i < string.length) {
    if (string.charAt(i) === character){
      counter++;
    } 
    i++;  
  }
  console.log(counter);
}
//Rendering an array for the given: start, end and step length...

function renderArray(start, end, step){
  let array = [];
  if (step >= 0){
    for (let i = start; i <= end; i += step){
      array.push(i);
    }
   } else {
      for (let i = start; i >= end; i += step){
        array.push(i);
      }
    }
  return array;
}
console.log(renderArray(5, 2, -1));

//Reversing an array via producing a NEW one

let a = [1, 3, 6, 10];
function reverseArray(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.unshift(array[i]);
  }
  return newArray;
}

console.log(reverseArray(a));
console.log(a);

//Reversing an array via changing the existing one - just like the method '.reverse' does...

function reverseArrayInPlace(array){
  for (i = 0; i < Math.floor(array.length / 2); i++){
    let old = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = old;
  }
  return array;
}
 
/*The following data structure is given below:
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
Given the array [1,2,3] render the object as above..
*/
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list;
}

//Now, the other way round = vice versa
function listToArray(list) {
  let array = [];
  for (node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
console.log(listToArray(list));


/*Checkign deep equality of two values...True answer only in case of exactly the same values or for two quantities which are 
object with the same properties and their values...*/
function deepEqual(a,b) {
  if (a === b) return true;
  if (a == null || typeof a != 'object' || b == null || typeof b != 'object') return false;
  let keysA = Object.keys(a), 
      keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA){
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

let c = {
  value: 1,
  rest:{
  color: 'blue'
}}

let d = {
  value: 1,
  rest:{
    color:'blue'
  }
}
console.log(deepEqual(c, d));
//--------------------------------------------------------------------------------------------------

//A simple example of higher order function
function forEach(array, action){
  for (let i = 0; i < array.length; i++){
    action(array[i]);
  }
}

forEach(['one', 'South Africa', 10], console.log);


/* The following function:
  let gatherSatisfactionCoefficients = (agenda) => {
  let coefficients = {};
  for (let entry = 0; entry < agenda.length; entry++){
    let events = agenda[entry].events;
    for (let i = 0; i < events.length; i++){
      let event = events[i];
      if (!(event in coefficients)){
        coefficients[event] = measureSatisfaction(event);
      }
    }
  }; 
  return coefficients;
}
can be written in an easier way, thanks to 'forEach' array method:
*/ 

let gatherSatisfactionCoefficients1 = (agenda) => {
  let coefficients = {};
  agenda.forEach(function(entry){
    entry.events.forEach(function(event){
      if (!(event in coefficients)){
        coefficients[event] = measureSatisfaction(event);
      } 
    });
  });
  return coefficients;
}
 console.log(gatherSatisfactionCoefficients1(agenda));

//---------------------------------------------------------------------------------------
function greaterThan(n) {
  return function(m) {
    return m > n;
  }
}
let greaterThan100 = greaterThan(100);

function noisy(f) {
  return function(arg) {
    console.log('calling with ', arg);
    let val = f(arg);
    console.log('called with ', arg, ' -got ', val);
    return val;
  };
}
noisy(Boolean)(23);

function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (let i = 0; i < times; i++) {
    body(i);
  }
}

repeat(3, function(n) {
  unless (n % 2, function() {
    console.log(n, 'is even');
  })
})
//----------------------------------JSON---------------------------------
let people = [
  {
    name: 'John',
    age: 24,
    sex: 'male',
    nationality: 'English',
    eduStart: 1998,
    eduEnd: 2017
  },
  {
    name: 'Sarah',
    age: 30,
    sex: 'female',
    nationality: 'American',
    eduStart: 1988,
    eduEnd: 2009
  },
  {
    name: 'Dan',
    age: 40,
    sex: 'male',
    nationality: 'Canadian',
    eduStart: 1978,
    eduEnd: 2000
  },
  {
    name: 'Sue',
    age: 54,
    sex: 'female',
    nationality: 'Chinese',
    eduStart: 1972,
    eduEnd: 1990
  }
]


let peopleJson = JSON.stringify(people);
console.log(peopleJson);
console.log(JSON.parse(peopleJson).length);
//------------------------------------FILTER-----------------
console.log(people.filter(function(person) {
  return person.age > 24 && person.sex === 'male';
}))
//-------------------------------------MAP---------------------
let peoplesNames = people.map(function(person){
  return person.name;
});

console.log(peoplesNames);
//--------------------------------------REDUCE-----------------------
let totalAge = people.map(function(person){
  return person.age;
}).reduce(function(a, b){
  return a + b;
});
console.log(totalAge);
//------------------------ COMPOSABILITY OF HIGHER ORDERED FUNCTIONS------------------

function eduLen(person) {
  return person.eduEnd - person.eduStart;
}

function sum(a, b) {
  return a + b;
}

function average(array) {
  return (array.reduce(sum, 0) / array.length);
}

function male(array) {
  return array.filter(function(person){
    person.sex === "male";
  });
}

function female(array) {
  return array.filter(function(person){
    person.sex === "female";
  });
}

console.log('The average education length for men is ' + average(male(people).map(eduLen)));


/*function eduAverage(array, sex) {
  return array.filter(function(person){
    return person.sex === sex;
  }).reduce(sum) / array.length;
}
console.log(eduAverage(people, 'male'));
*/
 /*---------------------------------------PROTOTYPES, ARRAYS-------------------------------------------------*/
 let protoPerson = {
   speak: function speak(phrase) {
     console.log(`The ${this.type} person says: '${phrase}'.`)
   }
 }
 let sadPerson = Object.create(protoPerson);
 sadPerson.type = 'sad';
 sadPerson.speak('I am not too good today...');





 let protoPerson1 = {
   speak(phrase){
     console.log(`The ${this.type} person says: '${phrase}'`);
   }
 }
 let happyPerson = Object.create(protoPerson1);
 happyPerson.type='happy';
 happyPerson.speak('I am ok today...');



 function Person(type){
  this.type = type;
}
Person.prototype.speak = function(phrase){
  console.log(`The ${this.type} person says: '${phrase}'.`);

}
let cheerfulPerson = new Person('cheerful');
cheerfulPerson.speak('I am cheeful today!');





class Person1 {
  constructor(type){
    this.type = type;
  }
  speak(phrase){
    console.log(`The ${this.type} person says" '${phrase}'.`);
  }
}
let silentPerson = new Person1('silent');
silentPerson.speak('I dont feel like speaking a lot...');


/*--------------------------MAPS----------------------------------*/
let fingers = new Map();
fingers.set ('frog', 3);
fingers.set ('human', 5);
fingers.set ('spider', 8);

console.log(`Is horse's number of fingers know? `, fingers.has('horse'));
console.log(`Is the number of frog's fingers know? `, fingers.has('frog'));
for (let name of fingers) (
  console.log(`${name[0][0].toUpperCase()}${name[0].slice(1)} has ${name[1]} fingers.`)
)
/*----------------------ITERATOR INTERFACE-----------------------*/

class Matrix{
  constructor(width, height, content = (x,y) => undefined) {
    this.width = width;
    this.height= height;
    this.content = [];
    for (let y = 0; y < height; y++){
      for (let x = 0; x < width; x++){
        this.content[y * width + x] = content(x, y);
      }
    }
  }
  get (x,y) {
    return this.content[y * this.width + x];
  }
  set (x,y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x=0;
    this.y=0;
    this.matrix=matrix;
  }
  next() {
    if (this.y == this.matrix.height) return {done: true};
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)};
      
    this.x++;
    if (this.matrix.x == this.matrix.width){
      this.x=0;
      this.y++;
    }
    return {value, done: false};
  }
}