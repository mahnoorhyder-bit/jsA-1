// // chap 1-3

// alert("I'm 15 years old");
// alert("You have visited this site 14 times");
// var birthYear = 1990;
// document.write("My birth year is "+ birthYear ) ;
// document.write(" Datatype of my declare variable is number");
// var VisitorName = "John Doe";
// var ProductTitle = "T-shirt(s)";
// var quantity= 5;
// document.write(VisitorName +" ordered "+ quantity +" "+ ProductTitle + " on XYZ Clothing Store.");

//// chap-2

// //   Q 4
// let sname = "Mahnoor";
// let sage = 19;
// let qualification = "Undergraduate Computer-Science Student"
// alert(sname);
// alert(sage + " years old");
// alert(qualification)

//   //   Q 4
// pizza
// pizz
// piz
// piz
// pi
// p

// let Name = "PIZZA";
// function trim (name){
//     while (name.length>=1){
//         alert(name.slice(0,i))
//     }
// }

// // chap 4
////q-1
// let naam = "Mahnoor";  let age = 19; let height = "5.4f";
// document.write(naam +"<br>" + age +"<br>"+  height)

////q-2
// let myname = "Mahnoor";
// let age = 19;
// let batch = "Second_year";
// let $num = "100";
// let phoneNo = "03216072";

//let 1name = "Mahnoor";  //number in start illegal
// let my age = 45;  // space in between illegal
// let function = "hello world";  //reserved keyword
// let address# = "ndfdsfi397"; // use of # is not allowed
// let marks+percentage = 32;  // use of + and all special char except $ , _ are not allowed

////q-2
// let number = " number "
// let _ = " _ ";
// let $ = " & ";
// let alphabet = " letters "
// let sensitivity = "sensitive";
// let keyword = "reserved keyword"

////q3
// document.write( "<b> Rules for naming JS variables </b> <br><br>")

// document.write("Variable names can only contain "+ number + ", "+ _  + ", "+ $  + "and " +  alphabet + ", For example :$my_1stVariable "+"<br>")

// document.write("Variables must begin with a "+  number  + _  + ", "+ $  + "and " +  alphabet + ", For example :$name, _name or name <br>")

// document.write("Variable names are case " + sensitivity + "<br> ");

// document.write("Variable names should not be JS  "+ keyword)

// // chap 5
//  let num1 = prompt("enter number 1");
// let num2 = prompt("enter number 2");
// let Result = num1 + num2;
// document.write("The Sum of " + num1 + " and " + num2 + " is " + Result);



// var num1 = 3;
// var num2 = 5;
// var subtract = num1 - num2;
// document.write("Subtraction of 3 and 5 is " + subtract);

// var num1 = 3;
// var num2 = 5;
// var multiply = num1 * num2;
// document.write("Multiplication of 3 and 5 is " + multiply );

// var num1 = 3;
// var num2 = 5;
// var divide = num1 / num2;
// document.write("Division of 3 and 5 is " + divide );

// var num1 = 3;
// var num2 = 5;
// var remainder = num1 % num2;
// document.write("Remainder of 3 and 5 is " + remainder );

// var num = 5;
// document.write("Value after variable declaration is undefined ");
// document.write("initial value:"+ num);
// document.write(" Value after increment is:")
// var num++ ;

//// q-4

// var ticketPrice = 600 ;
// var totalCost = 5 * ticketPrice;
// document.write("Total cost to buy 5 tickets to a movie is "+ totalCost + " PKR") 

////q-5
// var num1 =4*1;
// var num2 = 4*2 ;
// var num3 = 4*3 ;
// var num4 = 4*4 ;
// var num5 = 4*5 ;
// var num6 = 4*6 ;
// var num7 = 4*7 ;
// var num8 = 4*8 ;
// var num9 = 4*9 ;
// var num10 = 4*10 ;
// document.write("4*1 = " + num1 + "<br>")
// document.write("4*2 = " + num2 + "<br>")
// document.write("4*3 = " + num3 + "<br>")
// document.write("4*4 = " + num4 + "<br>")
// document.write("4*5 = " + num5 + "<br>")
// document.write("4*6 = " + num6 + "<br>")
// document.write("4*7 = " + num7 + "<br>")
// document.write("4*8 = " + num8 + "<br>")
// document.write("4*9 = " + num9+ "<br>")
// document.write("4*10 = " + num10 + "<br>")

////q-6
// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }
//   function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
//   }
//   var celsiusTemperature = 25;
//   var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
//   document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");
//   var fahrenheitTemperature = 77;
//   var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
//  document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");


////q-7
// var PriceofItem1 = 650;
// var quantityof1 = 3;
// var total1 = PriceofItem1*quantityof1;
// var PriceofItem2 = 100;
// var quantityof2 = 7;
// var total2 = PriceofItem2*quantityof2;
// var ShippingCharges = 100;
// var totalCost = total1 + total2 + ShippingCharges; 
// document.write("Price of item 1 is "+ PriceofItem1  + "<br>")
// document.write(" Quantity of 2 is "+ quantityof1  + "<br>")
// document.write(" Price of item 2 is "+ PriceofItem2  + "<br>")
// document.write(" Quantity of 2 is "+ quantityof2  + "<br>")
// document.write(" ShippingCharges is "+ ShippingCharges  + "<br>" )
// document.write(" Total cost is "+ totalCost )

//// q-8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = obtainedMarks  / totalMarks * 100;  
// document.write(" Total Marks : " + totalMarks + "<br>")
// document.write(" Obtained Marks : " + obtainedMarks + "<br>")
// document.write(" Percentage : " + percentage)

////q-9
// var Dollar1 = 104.80;
// var Riyal1 = 28;
// var DtoPkr = Dollar1*10;
// var RtoPkr = Riyal1*25;
// var exchange= DtoPkr+RtoPkr
// document.write(" DOLLAR TO PKR" + "<br>")
// document.write("Total currency in PKR : "+exchange)

////q-10
// var birthYear= 2003;
// var CurrentYear = 2023;
//  var age = 2023-2003;
//  document.write ("Current Year: " + CurrentYear + "<br>")
// document.write( "Birth Year: " + birthYear + "<br>")
// document.write( "Your Age: " + age)

////q-11
// var radius = 2*3.142;
// var r= 3.19;
// var roc= radius*r;
// document.write ("The radius of circle is" + Math.round(roc) + "<br>");
// var circum= 2*3.142;
// var ra= 4.089;
// var c= circum*ra;
// document.write("Circumference of circle is "+ c + "<br> " )
// var area= roc* c * 2.44;
// document.write("The area is "+ area)

////q-12
// const favoriteSnack = "chocolate";
// const currentAge = 15;
// const maxAge = 65;
// const amountPerDay = 3;
// const totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
// document.write(`You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maxAge}`);

////chap 6-9

////q-1
// let a = 10;
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

////q-2
//var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;  //// --a decrement a by 1, making a equal to 1.
// --a - --b; //// --b decrements b by 1, making b equal to 0
// --a - --b + ++b; //// ++b increments b by 1, making b equal to 1
// --a - --b + ++b + b--; //// b-- use the current value of b and then decrements b by 1.

////q-3
// const nam = prompt("What is your name?");
// alert(`Hello, ${nam}! Nice to meet you.`);

////Q-4
// let num = prompt("Enter a number:");
// if (num === "" || isNaN(num)) {
//   num = 5;
// }
// let table = "";

// for (let i = 1; i <= 10; i++) {
//   table += num + " x " + i + " = " + num * i + "<br>";
// }
// document.write(table);

////q-5
// let subject1 = prompt("Enter first subject name:");
// let subject2 = prompt("Enter second subject name:");
// let subject3 = prompt("Enter third subject name:");
// const TOTAL_MARKS = 100;
// let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
// let totalMarks = TOTAL_MARKS * 3;
// let obtainedMarksTotal = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (obtainedMarksTotal / totalMarks) * 100;
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total Marks:</td><td>" + obtainedMarksTotal + " / " + totalMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage:</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

// chap 9-11
//// q-1
// let cityName = prompt("Enter a city name:");

// if (cityName === "Karachi") {
//  document.write("Welcome to City of Lights");
// }

////q-2
// let gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//   document.write("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     document.write("Good Morning Ma'am");
// } else {
//   document.write("Invalid gender");
// }

////q-3
// const signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):");
// switch(signalColor.toLowerCase()) {
//   case "red":
//     alert("Must Stop");
//     break;
//   case "yellow":
//     alert("Ready to move");
//     break;
//   case "green":
//     alert("Move now");
//     break;
//   default:
//     alert("Color is Invalid");
// }

//// q-4

// let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
// if (remainingFuel < 0.25) {  
//   alert("Please refill the fuel in your car");
// }

//// q-5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); ////true
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); ////false
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");  ////condition4 is true.
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); //// cost equals.
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat"); ////car is smaller than cat.
// }

//// q-6
// var subject1Mark = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2Mark = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3Mark = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var totalObtainedMarks = subject1Mark + subject2Mark + subject3Mark;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry, better luck next time";
// }
// document.write("<h2>Mark Sheet</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

////q7
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//    document.write("Close enough to the correct answer.");
// } else {
//     document.write(`Sorry, the secret number was ${secretNumber}.`);
// }

//// q8
// const num = parseInt(prompt("Enter a number:"));
// if (num % 3 === 0) {
//   document.write(`${num} is divisible by 3`);
// } else {
//   document.write(`${num} is not divisible by 3`);
// }

////q9
// const num= parseInt(prompt("Enter a number:"));
// if (num % 2 === 0) {
//  document.write(`${num} is an even number`);
// } else {
//   document.write(`${num} is an odd number`);
// }

////q-10
// const temperature = parseInt(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//    document.write("Today's Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// } else {
//   document.write("Stay warm, it's freezing outside!");
// }

////q-11
// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");
// let operation = prompt("Enter the operation (+, -, *, /, %): ");
// if (operation === "+") {
//   let result = parseFloat(num1) + parseFloat(num2);
//   document.write(`The result is: ${result}`);
// } else if (operation === "-") {
//   let result = parseFloat(num1) - parseFloat(num2);
//   document.write(`The result is: ${result}`);
// } else if (operation === "*") {
//   let result = parseFloat(num1) * parseFloat(num2);
//   document.write(`The result is: ${result}`);
// } else if (operation === "/") {
//   let result = parseFloat(num1) / parseFloat(num2);
//   document.write(`The result is: ${result}`);
// } else if (operation === "%") {
//   let result = parseFloat(num1) % parseFloat(num2);
//   document.write(`The result is: ${result}`);
// } else {
//   document.write("Invalid operation.");
// }

// chap 12-13
//// q-1
// let char = prompt("Enter a character:");
// let code = char.charCodeAt(0);
// if (code >= 48 && code <= 57) {
//     document.write(char + " is a number.");
// }
// else if (code >= 65 && code <= 90) {
//     document.write(char + " is an uppercase letter.");
// }
// else if (code >= 97 && code <= 122) {
//     document.write(char + " is a lowercase letter.");
// }
// else {
//     document.write("Invalid character");
// }

// // q-2

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));
// if (num1 > num2) {
//   document.write(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   document.write(num2 + " is larger than " + num1);
// } else {
//   document.write("Both numbers are equal ");
// }

////q-3
// let number = prompt("Enter a number:");
// if (number > 0) {
//     document.write("The number is positive");
// } else if (number < 0) {
//     document.write("The number is negative");
// } else {
//     document.write("The number is zero");
// }

//// q-4
// function isVowel(char) {
//     var lowerChar = char.toLowerCase();
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   document.write(isVowel('a') + "<br>"); 
//   document.write(isVowel('E') + "<br>"); 
//   document.write(isVowel('x')); 
  

//// q-5
// let correctPassword = "ps136";
// let userPassword = prompt("Enter your password:");
// if (!userPassword) { 
//  document.write("Please enter your password.");
// } else if (userPassword === correctPassword) { 
//   document.write("Correct! The password you entered matches the original password.");
// } else {
//   document.write("Incorrect password.");
// }

//// q-6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

////q-7
// let time = prompt("Enter time in 24-hour clock format (e.g. 14:00):");
// let hours = parseInt(time.substring(0, 2));
// let minutes = parseInt(time.substring(2, 4));
// let meridian;

// if (hours >= 00 && hours <= 11) {
//   meridian = "AM";
// } else {
//   meridian = "PM";
// }
// if (hours === 00) {
//   hours = 12;
// } else if (hours > 12) {
//   hours = hours - 12;
// }
// document.write(`The time in 12-hour clock format is: ${hours}:${minutes} ${meridian}`);


