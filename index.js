 //***************** Section 1  Console concept *****************
// console.log('test');

 // ***************** Secion 2 Variable and its values *****************
let myName = "Muhammad ";
var _a = "Test";
// var 1a = "Test"; 
var $test = "Test"; 
var __test = "Test"; 
// console.log($test);


//  ***************** Section 3 Data Types *****************
var myFullName = "Muhammad  Ali";
var sign = '+';
// console.log('Type Of Use to check type of a variable', typeof(sign));
var ex1 = 10 + "30"; 
var ex2 = 10 - "30"; //Bug in js 
var ex3 = "java" + "30"; //Bug in js 
var ex4 = "java" + 30;
var ex5 = "java" - 30;
var ex6 = true + true;
var ex7 = true + false;
var ex8 = false + false;
var ex9 = false + true;
// console.log(ex9) 

//  ***************** Section 4 null vs undefined *****************
var test = null;
var newTest;
// console.log(newTest);
// console.log(test);


//  ***************** Section 5 What is NAN? *****************
var myNumber = 467342343324;
var outCum;
if(typeof(myNumber) == "number")
{
    outCum  = 1;

    // console.log(outCum);
    // return outCum;
}
else{
    outCum  = 0;
    // console.log(outCum);
    // return outCum;
}
// console.log(isNaN(myNumber));
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));
// console.log(NaN);

//  ***************** Section 6 Arthimetic Operator in JS *****************
var sum  = 10 + 5;
// console.log(sum);
// console.log(++sum);

// console.log(3**3);
// console.log(3+"3");
var a= 3;
var b = 4;
a= a+b;
b= a-b;
a= a-b;
// console.log(a,b);

var num1 = 5;
var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1==num2);
// console.log(num1===num2);


//  ***************** Section 7 Conditional Operator in JS *****************


// var year = 2020;
// if(year % 4 == 0)
// {
//     if(year % 100 == 0)
//     {
//         if(year % 400 == 0)
//         {
//             console.log('Leap Year');
//         }
//         else{
//             console.log('Not Leap Year');

//         }
//     }
//     else{
//         console.log(' Leap Year');
    
//     }
// }
// else{
//     console.log('Not Leap Year');

// }


// if(score = 0){
//     console.log('OMG! You loss the Match')
// }
// else{
//     console.log('Yeah! You won the Match')
// }


area = 'Rectangle';
r = 3;
var finalArea = 0;
var Π = 3.14;
if(area == 'circle'){
    // Area = Π * r * r;
    finalArea = Π * r * r;
    // console.log('Area of Circle is: '+finalArea)
}
else if(area == 'Triangle'){
    // finalArea = (0.5)*height*base;
    finalArea = (.5)*10*10;
    // console.log('Area of Triangle is: '+finalArea)
}
else if(area == 'Rectangle'){
    // Area = width + length;
    finalArea = 10*10;
    // console.log('Area of Rectangle is: '+finalArea)
}
else{
    // console.log('Please Enter Correct Area')
}


switch(area){
    case 'circle':
        finalArea = Π * r * r;
        // console.log('Area of Circle is: '+finalArea);
        break;

    case 'Triangle':
        finalArea = (.5)*10*10;
        // console.log('Area of Triangle is: '+finalArea);
        break;

    case 'Rectangle':
        finalArea = 10*10;
        // console.log('Area of Rectangle is: '+finalArea);
        break;

    default:
        // console.log('Please Enter Correct Area')
    
}

var num = 0;
while(num <= 5){
// console.log(num);
num++;
}
var n = 0;
do{
//    console.log(n);
   n++; 
}
while(n <= 5);

for(n = 1; n<=10; n++){
//    console.log(8+' * '+ n +' = '+ n*8);
}

//  ***************** Section 8 Function in JS *****************


function sums(a,b){ // parameters in a function
    var tot = a+b;
    // console.log(tot);
}

var test = sums(10,12); // arguments in a function
test;


 function defaultParams(a,b=0,c= 10){ // default parameter
        return  res = a+b-c;
 }
// console.log(defaultParams(20,30,9))


// How to convert it into Fat arrow functions
const sumFatArrow = () =>{
    var a = 5, b= 10;
    return a+b;
}
// console.log(sumFatArrow())

//  ***************** Section 9  Arrays in JS *****************
var myFirstArray = ['a1','a$2', 'a3'];
// console.log(myFirstArray[myFirstArray.length-1]);
// console.log(myFirstArray.length);
if(myFirstArray.includes('a$2') == true){
// console.log('HURRAH');
}
else{
// console.log('opps');
}
for (let n = 0; n < myFirstArray.length; n++) {
    const element = myFirstArray[n];
    // console.log(element);
}

// For in loop
for (const elements in myFirstArray) {
    // console.log(elements);
}

// For of loop

for (const elements of myFirstArray) {
    // console.log(elements);
}

// foreach loop

myFirstArray.forEach(function(element,index,array) {
    // console.log(array);
});

// push

myFirstArray.push('test')

// unshift

myFirstArray.unshift('test')

// shift 

myFirstArray.shift('test')

// pop 

myFirstArray.pop('test')

// console.log(myFirstArray);


var month = ['jan','feb','march'];
// console.log(month);
// sol 1:
const checkIndex = month.indexOf('feb');
let newArray = [];
if(checkIndex != -1){
     newArray = month.splice(1,1,"Feb");
}
// console.log(month);

// sol2:
firstArr_res = [];
let firstArr = [25,36,49,64,81]
for (const iterator of firstArr) {
    // console.log(Math.sqrt(iterator))
    firstArr_res.push(Math.sqrt(iterator));
}
// console.log(firstArr_res);
let secondArr = [2,4,6,8]

for (const iterator of secondArr) {
    const resiterate = iterator*2;
    // console.log(resiterate);
    if(resiterate > 10){
        console.log(resiterate);
    }
}

