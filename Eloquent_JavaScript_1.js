// Unary Operators

// Not all operators are symbols. Someare written as words
// For example, the typeof operator

// The typeof operator produces a string value naming the type
// of value you give it.

// The typeof operator only takes one value

console.log(typeof 4.5);
console.log(typeof "x");

// Operators that use two values are called binary operators, while those that
// take one are called unary operators. THe minus operator can be used both as
// a binary operator and as a unary operator

console.log(- (10 - 8));
// -> -8

// Return Values

console.log(Math.max(2, 4));
// --> 4

// Some functions don't need a side effect to be useful
// For example, Math.max takes any amount of number
// arguments and returns the greatest.

// Switch Statements
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

// There is a construct called switch that is intended
// to express such a "dispatch" in a more direct way.

switch(prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// The program will start executing at the label that corresponds to 
// the value that switch was given, or at default if no matching value is found

// It will continue executing, even across other labels,
// Until it reaches a break statement

// In some cases, such as the "sunny" case, this can be used to share some
// code between cases ( it recommends going outside for both sunny and cloudy weather )

// Declaration Notation

function square(x) {
    return x * x;
}

// WHen the function keyword is used at the start of a statement, it words differently.
// THe statement defines the binding square and points it at the given function.
// It doesn't not require a semicolon after the function.

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

// This works because the code uses the function defined below it.

// IMPORTANT <3
// Function declarations are not part of the regular top-to-bottom
// flow of control.
// They are conceptually moved to the top of their scope
// and can  be used by all the code in that scope.
// THis is useful because it offers the freedom to order code in a way
// that seems meaningful, without worrying about having to define
// all functions before they are used.

// Arrow Functions

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result += base;
    }
    return result;
};

// The arrow comes after the list of parameters and is followed by
// the function's body. It expresses something like "this input 
// (the parameters) produces this result (the body)."

// When there is only one parameter name, you can omit the parentheses.

const square1 = (x) => { return x * x };
const square2 = x => x * x;

// No parameters

const horn = () => {
    console.log("Toot");
};

// Call Stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

/**
 * Because a function has to jump back to the palce that 
 * called it when it returns, the computer must remember 
 * the context from which the call happened. In one case,
 *  console.log has to return to the greet function when 
 * it is done.

The place where the cpu stores this context is the calls tack.

Every time a function is called, the current context is 
stored on top of this stack.
When a function returns, it removes the top context from 
the stack and uses that context to continue execution.

Storing this atck requires sapce in cpu memory.
 */

// Optional Arguments

// The following code is allowed and executes
// without any issues

function square(x) { return x * x }
console.log(square(4, true, "hedgehog"));
// --> 16

/** 
 * We defined square with only one parameter.

However, when we call it with 3 (more than the
     amount of parameters originally defined), 
     the language doesn't complain.
It ignores the extra arguments and computs the 
square of the first one.

JavaScript is extremely broad-minded about the 
number of arguments you pass to a function. 
If you pass too many, the extra ones are ignored.

If you pass too few, the missing parameters get 
assigned the value undefined.
 */

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
// --> -10
console.log(minus(10, 5));
// --> 5

/** 
 * If you write an = operator after a parameter,
 *  followed by an expression, the value of that
 *  expression will replace the argument when it
 *  is not given.

For example, this code makes the 2nd argument 
optional.
If you don't provide it or pass the value 
undefined, it will default to 2, and the 
function will behave like square.w
 */

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
// --> 16, because exponent is set to the
// default 2 because none other
// parameter was given.

console.log(power(2, 6));
// --> 64
// Outputs 2 to the power of 6 because
// 6 was explicitly given as a parameter
// in the power function defined above.

// Closure

/** 
 * he ability to treat functions as values,
 *  combined with the fact that local bindings
 *  are re-created every time a function is 
 * called, brings up an interesting question. 
 * What happens to local bindings when the 
 * function call that created them is no longer 
 * active? (How would it no longer be active 
 * ...? >_>)

The following code shows an example of this.
It defines a function, wrapValue, that creates
 a local binding.
It then returns a function that accesses and 
returns this local binding.
 */

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// --> 1
console.log(wrap2());
// --> 2

/** 
 * This is allowed and works as you'd hope
 *  - both instances of the binding can still
 *  be accessed. This situation is a good 
 * demonstration of the fact that local buildings
 *  are created anew for every call, and different
 *  calls can't trample on one another's local bindings.

This feature - being able to reference a 
specific instance of a local binding in an 
enclosing scope - is called closure. A function
 that references bindings from local scopes around 
 it is called a closure. This behavior not 
 only frees you from having to worrry about 
 lifetimes of bindings but also makes it 
 possible to use function values in some 
 creative ways.

With a slight change, we can turn the 
previous example into a way to create 
functions that multiply by an arbitrary 
amount.
 */

// RECURSION

/** 
 * It is perfectly OK for a function to 
 * call itself, as long as it doesn't do 
 * it so often that it overflows the stack. 
 * A function that calls itself is called 
 * recursive.

Recursion allows some functions to be 
written in a different style. Take, for 
example, this alternative implementation 
of power:
 */

function power(base, exponent) {
    if(exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));
// --> 8

// NOTE:
/** 
 * Running thru a simple loop is 
 * generally cheaper than calling 
 * a function multiple times.
 */

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, )
        }
    }
}

/////////////////

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// --> 1
delete anObject.left;
console.log(anObject.left);
// --> undefined
// ^Due to deleting .left method from
// the anObject object.
console.log("left" in anObject);
// --> false
console.log("right" in anObject);
// --> true

/** 
 * The binary in operator, when applied 
 * to a string and an object, tells you 
 * whether that object has a property with 
 * that name. The difference between setting 
 * a property to undefined and actually 
 * deleting it is that, in the first case, 
 * the object still has the property (it 
 * just doesn't have a very interesting 
 * value), wheras in the 2nd case, the 
 * property is no longer present and in 
 * will return false.

To find out what properties an object has, 
you can use the Object.keys function. You 
give it an object, and it returns an array 
of strings - the object's property names.
 */

console.log(Object.keys({x: 0, y: 0, z: 2}));
// --> ["x", "y", "z"];

console.log(Object.keys({gurl: 2, yas: 3, omg: 5}));
// --> ["gurl", "yas", "omg"];

// There's an Object.assign function that 
// copies all properties from one object
// into another.

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// --> {a: 1, b: 3, c: 4}

let objectB = {d: 53, u: 78, y: 2013, z: 0};
Object.assign(objectB, {u: 39, y: 29, z: -1});
console.log(objectB);
// --> {d: 53, u: 39, y: 29, z: -1};

/** Arrays, then, are just a kind of object
 *  specialized for storing sequences of things. 
 * If you evaulate typeof [], it produces "object".
 *  You can see them as long, flat octopuses with 
 * all their tentacles in a neat row, labeled 
 * with numbers.
 */

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower", 
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true}
];

/** 
 * Mutability

Numbers, strings, and Booleans, are all immutable.
 It is impossible to change values of those types.
  You can combine them and derive new values from 
  them, but when you take a specific string value, 
  that value will always remain the same. The text 
  inside it cannot be changed. If you have a string
   that contains "cat", it is not possible for other 
   code to change a character in your string to make
    it spell "rat".

Objects work differently. You CAN change their 
properties, causing a single object value to have
 different content at different times.

WHen we have two numbers, 120 and 120, we can 
consider them precisely the same number, whether
 or not they refer to the same physical bits.
WIth objects, there is a difference between 
having two references to the same object and 
having two different objects that contain the 
same properties. Consider the following code:
 */

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// --> true
console.log(object1 == object3);
// --> false

object1.value = 15;
console.log(object2.value);
// --> 15
// Returns 15 because object 1's value
// is set to object2's value, as well.
console.log(object3.value);
// --> 10
// Returns 10 because object3's 
// value is 10 and remains unchanged as so
// because there is no code attempting
// to change that object's value above.

/** 
 * The object1 and object2 bindings grasp the
 *  same object, which is why changing object1 
 * also changes the value of object2. They are 
 * said to have the same identity. The binding 
 * object3 poitns to a different object, which 
 * initially contains the same properties as 
 * object but lives a separate life.

Bindings can also be changable or constant, 
but this is separate from the way their values
 behave. Even through number values don't change, 
 you can use a let binding to keep track of a 
 changing unmber by changing the value the binding 
 points at. Similarly, through a const binding 
 to an object can itself not be changed and will 
 continue to point at the same object, the
  contents of that object might change.
 */

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
//This isn't allowed
score = {visitors: 1, home: 1};


/** 
 * lastIndexOf()

The lastIndexOf() method returns the 
position of the last occurence of a 
specified value in a string.

The string is searched from the END to 
beginning, but returns the index starting 
at the beginning of the string, at position 
0.

This method returns -1 if the value to 
search for never occurs.
 */


console.log("coconut".indexOf("u"));
// --> 5
console.log([1, 2, 3, 4, 5].lastIndexOf(2));
// --> 3

// SLICE

console.log([0, 1, 2, 3, 4].slice(2, 4));
// --> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// --> [2, 3, 4]
// When inputting only 1 value with the
// slice method, it outputs
// every iteration in the specific
// array from the specific index place
// of the 1 value specified.

/** 
 * When the end index is not given, 
 * slice will take all of the elements 
 * after the start index. You can also 
 * omit the start index to copy the entire 
 * array.

The concat method can be used to glue arrays 
together to create a new array, similar to what 
the + operator does for strings.

THe following example shows both in action.

It takes an array and an index, and it returns 
a new array that is a copy of the original 
array with the element at the given index 
removed.
Huh? Let's find out :) <3
 */

function remove(array, index) {
    // Sets up an array up to the specified index
    // I.e. the index value you want to remove :)
    return array.slice(0, index)
    // Adds on the continuing values AFTER
    // the value you skipped in the array
    // you've specified.
        .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// --> ["a", "b", "d", "e"]

// If you pass concat an argument that is not an array, 
// that value will be
// added to the new array as if 
// it were a one-element array.

// Strings and Their Properties

// We can read properties like length and toUpperCase
// from string values.
// But if you try to add a new property, it doesn't stick.

let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// --> undefined

/** 
 * Values of type string, number, and 
 * Boolean are not objects, and though 
 * the language doesn't complain if you 
 * try to set new properties on them, 
 * it doesn't actually store those 
 * properties. Every string value has 
 * a number of values. 

However, these types do have built-in 
properties. Every string value has a 
number of methods. Some very useful 
ones are slice and indexOf, which 
resemble the array methods of the 
same name.
 */

console.log("coconuts".slice(4, 7));
// --> nut
console.log("coconut".indexOf("u"));
// --> 5

/** 
 * One difference is that a string's indexOf 
 * can search for a string containing more 
 * than one character, wheras the corresponding 
 * array method looks only for a single element.
 */

console.log("one two three".indexOf("ee"));
// --> 11

/** 
 * The trim method removes whitespace 
 * (spaces, newlines, tabs, and similar 
 * characters) from the start and end 
 * of a string.
 */

console.log(" okay \n ".trim());
// okay

/** 
 * The zeroPad function from the previous 
 * chapter also exists as a method.
 * 
 * It is called padStart and takes the
 * desired length and padding character
 * as arguments.
 */

console.log(String(6).padStart(3, "0"));
// --> 006

// You can split a string on every occurrence of another string with split and join it again with join.

let sentence = "Secretarybirds sepecialize in stomping";
let words = sentence.split(" ");
console.log(words);
// --> ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// --> Secretarybirds. specialize. in. stomping

// A string can be repeated with the repeat method, 
// which creates a new string containing multiple
// copies of the original string, glued together.

console.log("LA".repeat(3));
// --> LALALA

// REST PARAMETERS
/**
 * It can be useful for a function to accept any number
 * of arguments.
 * For example, Math.max computes the maximum of all
 * the arguments it is given.
 * 
 * To write such a function, you put three dots before
 * the function's last parameter, like this:
 */

function max(...numbers) {
let result = -Infinity;
for (let number of numbers) {
    if (number > result) result = number;
}
return result;
}

console.log(max(4, 1, 9, -2));
// --> 9
/** 
 * When such a function is called, 
 * the rest parameter is bound to an 
 * array containing all further 
 * arguments. If there are other 
 * parameters before it, their 
 * values aren't part of that array. 
 * When, as in max, it is the only 
 * parameter, it will hold all arguments.

You can use a similar three-dot notation 
to call a function with an array of arguments.


*/

let numbers = [5, 1, 7];
console.log(max(...numbers));
// --> 7

/** 
 * This "spreads" out the array into 
 * the function call, passing its 
 * elements as separate arguments.
It is possible to include an array 
like that along other arguments, as 
in max(9, ...numbers, 2).

Square bracket array notation similarly 
allows the triple-dot operator to spread 
another array into the new array.
 */

let words = ["never", "fully"];
console.log("will", ...words, "understand");
// --> ["will", "never", "fully", "understand"]

/** 
 * The Math Object

As we've seen, Math is a grab bag of number-related utility functions, such as Math.max, Math.min, and Math.sqrt.

THe Math object is used as a container to group a bunch of
 related functionality. THere is only one Math object, and it 
is almost never useful as a value. Rather, it provides a name
space so that all these functions and values do not have to 
be global bindings.

Having too many global bindings "pullutes" the namspace. 
THe more names have been taken, the more likely you are to
 accidentally overwrite the value of some existing binding. For
 example, it's not unlikely to want to name something max in one of
 your programs. Since JS's built-in max function is ticked safely inside
 the Math object, we don't have to worry about overwriting it.


Many languages will stop you, or at least warn you, when you are
 defining a binding with a name that is already taken. JS does this for
 bindings you declared with let or const but -- perversely -- not for
 standard bindings nor for bindings declared with var or function.

Back to the Math object. If you need to do trigonometery, Math can
 help. It contains cos (cosine), sin (sine), and tan (tangent), as well as
 their inverse functions, acos, asin, and atan, respectively. THe
 number pi - or at least the closest approximation that fits in a JS
 number - is available as Math.PI.

Math.random()

console.log(Math.floor(Math.random() * 10);

Multiplying the random number by 10 gives us a number greater
 than or equal to 0 and below 10. Since Math.floor rounds down, this
 expression will produce, with equal chance, any number from 0
 through 9.

There are also the functions Math.ceil, Math.round, and Math.abs.
 Math.abs takes the absolute value of a number, meaning it negates
 negative values but leaves positive ones as they are.
 */

 /** 
  * JSON

Because properties only grasp their value, rather than contain it, 
objects and arrays are stored in the computer's memory as
 sequences of bits holding the addresses - the place in memory - of
 their contents. So an array with another array inside of it consists of
 (at least) one memory region for the inner array, and another for the
 outer array, containing (among other things) a binary number that
 represents the position of the inner array.

If you want to save data in a file for later or send it to another
 computer over the network, you have to somehow convert these
 tangles of memory addresses to a description that can be stored or
 sent. You could send over your entire computer memory along with
 the address of the value you're interested in, I supposee, but that
 doesn't seem like the best approach.

What we can do is serialize the data. That means it is converted into
 a flat description. A popular serialization format is called JSON.,
 which stands for JS object notation. IT is widely used as a data
 storage and communication format on the web, even in languages
 other than JavaScript.

JSON looks similar to JS's way of writing arrays and objects, with a
 few restrictions. All property names ahve to be surrounded by
 double quotes, and only simple data expressions are allowed - no
 function calls, bindings, or anything that involes actual computation.
 Comments are not allowed in JSON.
  */

{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}

// JS gives us the functions JSON.stringify and JSON.parse
// to convert data to and from this format. The first takes
// such a string and converts it to the value it encodes.

// Abstracting Repitition!

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// --> 0
// --> 1
// --> 2

// We don't have to pass a predefined function to repeat.
// Often, it is easier to create a function value on the
// spot instead

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// --> ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]


/**
 * Higher Order Functions

Functions that operate on other functions, either by taking them as
 arguments or by returning them, are called higher-order functions.
 Since we have already seen that functions are regular values, there is
 nothing particularly remarkable about the fact that such functions
 exist.

Higher-order functions allow us to abstract over actions, not just
 values. They come in several forms, For example, we can have
 functions that create new functions.
 */

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// --> true


// And we can have functions that change
// other functions

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
    }
}