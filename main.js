// 1
// var x = Number(prompt("Please Enter A Number"));
// console.log(x);

// *******************************************************************

// 2
//  var x = Number(prompt("Enter a Number"));

//  if (x%3===0 || x%4===0){
//     console.log("Yes");
//  }else {
//     console.log("Enter a Valid Number");
//  }

// *******************************************************************

// 3

// var x = Number(prompt("Enter a Number"));
// var y = Number(prompt("Enter a Second Number"));

// if(x>y){
//     console.log(x);
// }if (y>x){
//     console.log(y);
// }

// *******************************************************************

// 4

// var x = Number(prompt("Enter a Number"));
// if(x>0){
//     console.log("Positive");
// }if (x<0) {
//     console.log("negative");

// }

// *******************************************************************

// 5

// if(x>y && x>z){
//     console.log(`Max Element = ${x}`);
// }else if (y > x && y > z) {
//     console.log(`Max Element = ${y}`);
// }else if (z > x && z > y) {
//     console.log(`Max Element = ${z}`);
// }
// if (x<y && x<z) {
//     console.log(`Min Element = ${x}`);
// }else if (y < z && z< x){
//     console.log(`Min Element = ${y}`);
// }else if (z < x && z< y){
//     console.log(`Min Element = ${z}`);
// }

// *******************************************************************

// 6

// var x = Number(prompt("Enter an Integer"));

// if (x%2==0) {
//     console.log("even")
// }else if (x%2 != 0) {
//     console.log("Odd");
// }else {
//     console.log("Enter a Valid Number");
// }
// *******************************************************************

// 8

// var character = prompt(`Enter a Character`);

// if (character=== "a"|| character=== "A"||character=== "E"||character=== "e"||character=== "i"||character=== "I"||character=== "o" ||character=== "O"||character=== "u"||character=== "U" ) {
// console.log("vowel");
// }else {
//     console.log("Consonant");

// }
// *******************************************************************

// 9

// var num = Number(prompt("Enter a Number"));

// for (i=1;i<=num;i++){
//         console.log(i);

// }

// *******************************************************************

// 10

// var num = Number(prompt("Enter a Number"));

// for(i=1;i<=12;i++) {
//     console.log(num*i);
// }
// *******************************************************************

// 11

// var num = Number(prompt("Enter a Number"));

// for(i=1;i<=num;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// 12

// var firstGarde = Number(prompt("Enter First Grade"));
// var secondGarde = Number(prompt("Enter Second Grade"));
// var thirdGarde = Number(prompt("Enter Third Grade"));
// var fourthGarde = Number(prompt("Enter fourth Grade"));
// var fifthGarde = Number(prompt("Enter fifth Grade"));

// var total = firstGarde + secondGarde + thirdGarde + fourthGarde + fifthGarde;
// var average = total / 5;
// var percentage = (total/500) * 100;

// console.log(`Total Marks = ${total}`);
// console.log(`Average Marks = ${average}`);
// console.log(`Percentage = ${percentage}`);
// *******************************************************************

// 13

// var month = Number(prompt("Enter Month Number"));

// if (month === 1) {
//   console.log(31);
// } else if (month === 2) {
//   console.log(28);
// } else if (month === 3) {
//   console.log(31);
// } else if (month === 4) {
//   console.log(30);
// } else if (month === 5) {
//   console.log(31);
// } else if (month === 6) {
//   console.log(30);
// } else if (month === 7) {
//   console.log(31);
// } else if (month === 8) {
//   console.log(31);
// } else if (month === 9) {
//   console.log(30);
// } else if (month === 10) {
//   console.log(31);
// } else if (month === 11) {
//   console.log(30);
// } else if (month === 12) {
//   console.log(31);
// } else {
//   console.log("Enter a Valid Number");
// }
// *******************************************************************

// 14

// var physics = Number(prompt("Enter Physics Degree"));
// var chemistry = Number(prompt("Enter Chemistry Degree"));
// var biology = Number(prompt("Enter Biology Degree"));
// var math = Number(prompt("Enter Mathmatics Degree"));
// var computer = Number(prompt("Enter Computer Degree"));

// var percentage = (physics+chemistry+biology+math+computer) / 500 *100;

// console.log(percentage);

// if (percentage >= 90 && percentage <= 100) {
//     console.log(`Grade A`);
// }else if (percentage >= 80 && percentage < 90){
//     console.log(`Grade B`);
// }else if (percentage >=70 && percentage <80){
//     console.log(`Grade C`);
// }else if (percentage >= 60 && percentage < 70){
//     console.log(`Grade D`);
// }else if (percentage >= 40 && percentage < 60){
//     console.log(`Grade E`);

// }else if (percentage >= 0 && percentage < 40) {
//     console.log(`Grade F`);
// }else {
//     console.log(`Enter Valid Degrees`);
// }

// ************************************* Switch Case ******************************************

// 15

// var month = Number(prompt(`Enter Month Number`));

// switch (month) {
//   case 1:
//     console.log(31);
//     break;
//   case 2:
//     console.log(28);
//     break;
//   case 3:
//     console.log(31);
//     break;
//   case 4:
//     console.log(30);
//     break;
//   case 5:
//     console.log(31);
//     break;
//   case 6:
//     console.log(30);
//     break;
//   case 7:
//     console.log(31);
//     break;
//   case 8:
//     console.log(31);
//     break;
//   case 9:
//     console.log(30);
//     break;
//   case 10:
//     console.log(31);
//     break;
//   case 11:
//     console.log(30);
//     break;
//   case 12:
//     console.log(31);
//     break;

//   default:
//     console.log(`Enter a Valid Month Number`);
// }
// *******************************************************************************

// 16

// var character = prompt("Enter a Character");

// switch(character) {
//     case("a"):
//     case("A"):
//     case("e"):
//     case("E"):
//     case("I"):
//     case("i"):
//     case("u"):
//     case("U"):
//     case("o"):
//     case("O"):
//         console.log(`Vowel`);
//         break;
//     default:
//         console.log(`Consonant`);
// }
// *******************************************************************************

// 17

// var firstNumber = Number(prompt("Enter First Number"));
// var secondNumber = Number(prompt("Enter Second Number"));

// switch (true) {
//     case firstNumber > secondNumber :
//     console.log(`Max Number = ${firstNumber}`);
//     break;
//     case secondNumber > firstNumber:
//     console.log(`Max Number = ${secondNumber}`);
//     break;

// }
// *******************************************************************************

// 18
// var num = Number(prompt("Enter a Number"));

// switch (true) {
//   case num % 2 === 0:
//     console.log("Even");
//     break;

//   default:
//     console.log("Odd");
// }

// *******************************************************************************

// 19

// var num = Number(prompt("Enter a Number"));

// switch (true) {
//   case num > 0:
//     console.log(`Positive Number`);
//     break;
//   case num < 0:
//     console.log(`Negative Number`);
//     break;
//   case num === 0:
//     console.log(`Number is Zero`);
//     break;
//   default:
//     console.log(`Enter a Valid Number`);
// }

// *******************************************************************************

// 20


// var firstNumber = Number(prompt("Enter First Number"));
// var secondNumber = Number(prompt("Enter Second Number"));
// var operator = prompt("Enter Operator");

// switch (operator) {
//     case "+" :
//         console.log(firstNumber + secondNumber);
//         break;
//     case "-" :
//         console.log(firstNumber-secondNumber);
//         break;
//     case "*" :
//         console.log(firstNumber*secondNumber);
//         break;
//     case "/" :
//         console.log(firstNumber/secondNumber);
//         break;
//     default:
//         console.log("Enter a Valid operator");    
// }

