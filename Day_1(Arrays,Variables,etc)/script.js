//Task 1: Create a variable username using let with value "Moiz", and a constant birthYear with your year of birth. Then log
console.log("Task 1----");
let username = "moiz";
const birthyear = 2004;

console.log('Username:' + username + ',', 'Born on '+ birthyear);

/*Task 2: Create these variables: 

A number called marks (any number)
A string called subject
An array of 3 of your hobbies
An object with your name and age
Then log them all using console.log.
*/

console.log("Task 2----");
let marks = 100;
let Subject = "Maths";
let hobbies = ["reading", "writing", "coding"];
let person = {
    name: "moiz",
    age: 21
};

console.log(marks, Subject, hobbies,person.name,person.age);

/*Task 3: Task 3:
You have math = 95, english = 88.
Calculate and log:
Total marks
Average marks
Check if average is greater than 90 → if yes, print "Outstanding!"
*/

console.log("Task 3----");
let math = 95;
let english = 88;

let total = math + english;
let average = total/2;

console.log(total, average);

if(average > 90){
    console.log("Outstanding!");
}

/*Task 4: Make a variable temp = 35.
Write a condition:

If temp > 40 → log "Too Hot"

If temp > 30 → log "Warm"

Else → log "Cool"
*/

console.log("Task 4----");
let temp = 35;

if(temp > 40){
    console.log("too hot");
} else if(temp > 30){
    console.log("Warm")
}else{
    console.log("cool");
}

/* Task 5: Use a for loop to print numbers 1 to 10
Then use a for...of loop to print all hobbies in your hobbies array (from Task 2)
*/

console.log("Task 5----");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let num of hobbies){
    console.log(num);
}

/* Task 6: Write a function greet(name) that returns "Hello, <name>".
Call it with your name and print the result.

Also try writing the same using an arrow function
*/
console.log("Task 6----");

function greet(name){
    return "hello, " + name;
}

const greet1 = (name) => "hi, " + name;

console.log(greet("moiz"), greet1("Ali"));

/*Task 7: Create an array of your 5 favorite foods.
Do the following:

Add "biryani" using .push()

Remove the last item

Print each food using .forEach()

*/
console.log("Task 7----");

let foods = ["Chicken", "Karahi", "haleem", "Pulao", "Handi"]

foods.push("Biryani");

foods.pop();

foods.forEach(num => console.log(num));

/* Task 8: Make an object:Log this:

"Moiz from CS department has a CGPA of 3.8"

Use template literals to do it.

*/
console.log("Task 8----");

let user = {
    name: "Moiz",
    dep: "CS",
    cgpa: 3.8,
};

let message = `${user.name} from ${user.dep} department has a CGPA of ${user.cgpa}`;
console.log(message);

/*Task 9: Make a variable lang = "JavaScript" and print:

"I love learning JavaScript!"
(don't use +, only template literals)

*/
console.log("Task 9----");

let lang = "Javascript";

console.log(`I love using ${lang}`);

/*Task 10: Create a variable email = ""
Check:
if (email) {
  console.log("Email entered");
} else {
  console.log("No email provided");
}
Try setting email = "moiz@email.com" and see what changes*/

console.log("Task 10----");

let email = "Moiz@email.com";

if(email){
    console.log("Email entered");
} else {
    console.log("No email provided");
}

//Final Project: User enters their name and marks in 3 subjects → the app calculates the average → then shows a result message like:

//“Moiz, your average is 86. You got an A grade. 🔥”

console.log("Practice project----");

let name = "Moiz";
let marks1= {
    Eng: 88,
    Maths: 91,
    Sci: 79,
};

let average1 = (marks1.Eng + marks1.Maths + marks1.Sci)/3

let grade = average1 >= 90 ? "A" : average1 >= 80 ? "A-" : average1 >= 70 ? "B": "C" ;

console.log(`${name}, your average is ${average1.toFixed(2)}. You got an ${grade} grade`);