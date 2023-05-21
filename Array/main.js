//// q-1
// let studentNamesLiteral = [];
//// q-2
// let studentNamesObject = new Array();
//// q-3
// let stringsArray = ["Karachi", "Lahore", "Islamabad"];
//// q-4
// let numbersArray = [11, 22 , 33];
//// q-5
// let booleanArray = [true, true, false];
//// q-6
// let mixedArray = ["Karachi", 23, false, "Cat", 41];
//// q-7
// let educationQualification = "<h1>Qualifications:</h1>";
// document.write(educationQualification);
// let array =["1) SSC <br>"+"2) HSC <br>"+ "3) BCS <br>"+ "4) BS <br>"+"5) BCOM <br>"+"6) MS <br>"+"7) M. Phil <br>"+"8) PhD"];
// document.write(array);
//// q-8
// let studentNames =["Minahil", "Laiba", "Mahnoor"];
// let score = [400, 370, 390];
// document.write("<b>"+"Score of "+studentNames[0]+" is "+score[0]+". Percentage: "+(score[0]*100)/500+"%"+"</b>"+"<br>");
// document.write("<b>"+"Score of "+studentNames[1]+" is "+score[1]+". Percentage: "+(score[1]*100)/500+"%"+"</b>"+"<br>");
// document.write("<b>"+"Score of "+studentNames[2]+" is "+score[2]+". Percentage: "+(score[2]*100)/500+"%"+"</b>"+"<br>");

////q-9
// let colorNames = ["Gray", "Black", "Orange"];
// document.write("Array: " + colorNames + "<br><br>");
// let colorAdd = prompt("Enter a color to add in array:");
// colorNames.unshift(colorAdd);
// document.write("After adding color: " + colorNames + "<br><br>");
// let colorEnd = prompt("Enter a color in end of array:");
// colorNames.push(colorEnd);
// document.write("After add color in end: " + colorNames + "<br><br>");
// colorNames.unshift("White", "Sky-Blue");
// document.write("After add two colors in beginning: " + colorNames + "<br><br>");
// colorNames.shift();
// document.write("After delete first color: " + colorNames + "<br><br>");
// colorNames.pop();
// document.write("After delete last color: " + colorNames + "<br><br>");
// let indexAdd = parseInt(prompt("Enter index number to add color:"));
// let color_Add = prompt("Enter color name to add in index:");
// colorNames.splice(indexAdd, 0, color_Add);
// document.write("After add color at index " + indexAdd + ": " + colorNames + "<br><br>");
// let indexRemove = parseInt(prompt("Enter index to remove color:"));
// let numColorRemove = parseInt(prompt("Enter total color to remove:"));
// colorNames.splice(indexRemove, numColorRemove);
// document.write("After remove " + numColorRemove + " color from index " + indexRemove + ": " + colorNames + "<br><br>");

////q-10
// let score = [97, 75, 67, 81, 62];
// document.write("Scores of Students: " + score + "<br>");
// score.sort(function(a, b) {
//   return a - b;
// });
// document.write("Sorted Scores: " + score);

//// q-11
// let city = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];
// document.write("City: " + city + "<br>");
// let selectedCity = city.slice(0, 3);
// document.write("Selected Cities: " + selectedCity);

////q-12
// var array = ["This", "is", "my", "cat"];
// document.write("Array: " + array + "<br>");
// var combineString = array.join(" ");
// document.write("Combine String: " + combineString);

////q-13
// let fifoArray = [];
// document.write("Devices:" + "<br>")
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Moniter");
// document.write(fifoArray + "<br>")
// document.write("Out:" + "<br>")
// document.write(fifoArray.shift() + "<br>"); 
// document.write(fifoArray.shift() + "<br>"); 
// document.write(fifoArray.shift() + "<br>"); 
// document.write(fifoArray.shift() + "<br>");

////q-14
// let lifoArray = [];
// document.write("Devices:" + "<br>")
// lifoArray.push("Keyboard");
//  lifoArray.push("Mouse");
// lifoArray.push("Printer");
//  lifoArray.push("Moniter");
// document.write(lifoArray + "<br>")
// lifoArray.reverse();
// document.write("Out:" + "<br>")
// document.write("0th element ",lifoArray[0] + "<br>"); 
// document.write("1st element ",lifoArray[1] + "<br>"); 
// document.write("2nd element ",lifoArray[2] + "<br>"); 
// document.write("3rd element ",lifoArray[3]);

//// q-15
// let store = ["Nokia","Motorola","Samsung","Sony","Apple","Haier"];
// document.write(store + "<br>")
// document.write("<select>")
// document.write("<option>"+store[0]+"</option>");
// document.write("<option>"+store[1]+"</option>");
// document.write("<option>"+store[2]+"</option>");
// document.write("<option>"+store[3]+"</option>");
// document.write("<option>"+store[4]+"</option>");
// document.write("<option>"+store[5]+"</option>");
// document.write("</select>")