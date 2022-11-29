 //***************** Section 1  Console concept *****************
// console.log('test');

 // ***************** Secion 2 Variable and its values *****************
let myName = "Muhammad Abid";
var _a = "Test";
// var 1a = "Test"; 
var $test = "Test"; 
var abid__test = "Test"; 
// console.log($test);


//  ***************** Section 3 Data Types *****************
var myFullName = "Muhammad Abid Ali";
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
// var a= 3;
// var b = 4;
// a= a+b;
// b= a-b;
// a= a-b;
// console.log(a,b);

var num1 = 5;
var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1==num2);
// console.log(num1===num2);
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


if(score = 0){
    console.log('OMG! You loss the Match')
}
else{
    console.log('Yeah! You won the Match')
}

//  ***************** Section 7 Arthimetic Operator in JS *****************
