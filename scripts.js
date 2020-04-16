let name = 'Adam';

// backtick shortcut
console.log(`Hello, my dear ${name}`);

// jQuery part

$('p').html('The <strong>jQuery</strong> part has started!');

$('h1').css('background', 'red');

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p id="first">Added element</p>');
$('main').append('<p id="second">Added second element</p>');

$('#first').remove();

$('#add-button').click(() => {
  $('main').append('<p>Added a new p tag</p>');
});

let removeFuntion = () => {
  $('main p:last-child').remove();
}

// function removeFunction() {
//   $('main p').remove();
// }

$('#remove-button').click(removeFuntion);

// First part from the Developer Console

// 123
// 123
// 1+1
// 2
// 10-5
// 5
// 8*2
// 16
// 8/2
// 4
// let age
// undefined
// age = 33
// 33
// age+2
// 35
// age = 25
// 25
// age+2
// 27
// age = age+10
// 35
// let name
// undefined
// name = Adam
// name = 'Adam'
// "Adam"
// name = "Peti"
// "Peti"
// name = `backtick shortcut`
// "backtick shortcut"
// let greeting = "Hello 'everyone'!"
// undefined
// 'This is a quote form someone: "The quote"'
// "This is a quote form someone: "The quote""
// 'hello"
// VM1974:1 Uncaught SyntaxError: Invalid or unexpected token
// `You can use both: ' and " `
// "You can use both: ' and " "
// 8 + 2
// 10
// "Hello " + "Adam, who is " + age + " years old"
// "Hello Adam, who is 35 years old"
// "Hello " + "Adam, who is" + age + "years old"
// "Hello Adam, who is35years old"
// name = 'Adam'
// "Adam"
// `Hello ${name}, who is ${age} years old`
// "Hello Adam, who is 35 years old"
// 12 12
// VM2881:1 Uncaught SyntaxError: Unexpected number
// "hello" "world"
// VM2935:1 Uncaught SyntaxError: Unexpected string
// let something = 12;
// undefined
// something
// 12
// greeting
// "Hello 'everyone'!"
// let oldEnoughToDrive = true;
// undefined
// oldEnoughToDrive = false;
// false
// let oldEnoughToDrive = false;
// undefined
// true && (false || (true && false))
// false
// let x = 5;
// undefined
// x = 'hello'
// "hello"
// x = true;
// true
// "break until 16:05"
// "break until 16:05"
// let comment = "FIRST COMMENT!"
// undefined
// let comment2 = "the second comment, hello"
// undefined
// let comments = ["FIRST COMMENT!", "second comment"];
// undefined
// comments
// (2) ["FIRST COMMENT!", "second comment"]0: "FIRST COMMENT!"1: "second comment"length: 2__proto__: Array(0)
// comment2 + " adam"
// "the second comment, hello adam"
// comments[1] + " adam"
// "second comment adam"
// name
// "Adam"
// name.length
// 4
// name = 'Adam Gyulavari'
// "Adam Gyulavari"
// name.length
// 14
// name.substring(5)
// "Gyulavari"
// name.toUpperCase()
// "ADAM GYULAVARI"
// comments
// (2) ["FIRST COMMENT!", "second comment"]
// comments.length
// 2
// comments.push("third comment")
// 3
// comments
// (3) ["FIRST COMMENT!", "second comment", "third comment"]0: "FIRST COMMENT!"1: "second comment"2: "third comment"length: 3__proto__: Array(0)
// comments[0]
// "FIRST COMMENT!"
// let person = {
//   firstName: 'Adam',
//   lastName: 'Gyulavari',
//   email: 'adam@green.fox',
//   age: 33,
//   oldEnoughToDrive: true
// };
// undefined
// person
// {firstName: "Adam", lastName: "Gyulavari", email: "adam@green.fox", age: 33, oldEnoughToDrive: true}
// person.email
// "adam@green.fox"
// person.age + 10
// 43
// person.favoriteColor = 'green'
// "green"
// person
// {firstName: "Adam", lastName: "Gyulavari", email: "adam@green.fox", age: 33, oldEnoughToDrive: true, …}firstName: "Adam"lastName: "Gyulavari"email: "adam@green.fox"age: 33oldEnoughToDrive: truefavoriteColor: "green"__proto__: Object
// person.email = 'adam@greenfox.com'
// "adam@greenfox.com"
// let persons = [person, person, person]
// undefined
// persons
// (3) [{…}, {…}, {…}]
// person.favoriteColor = ['green', 'orange']
// (2) ["green", "orange"]