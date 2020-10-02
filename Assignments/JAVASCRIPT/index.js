//coercion 
// var firstName = ' John';
// var age =28;

// console.log(firstName + ''+age);
 
// var job = 'teacher';
// var isMarried = false; 
// console.log(firstname + 'is a' + age + 'year old' + job + '.Is he married?' +isMarried);

//variable Mutation 
// age = 'twenty eight';
// age = 28;
// age = false;
// console.log(age);

//Input
// var lastName = prompt('what isi your last name?');
// console.log(lastname);

/* Basic Operators
*/

//minus 
// var currentyear = 2020; 
// var johnAge = 28;
// var markAge = 32;

//Addition 
// var totalyears = johnAge + markAge; 
// console.log(totalyears);

//Multiplication/Division 
// var number = 20;
// console.log(number*2);
// console.log(number/2);

//Logical Operators 
// console.log(johnAge < markAge);

// var johnOlder = johnAge > markAge;
// console.log(johnOlder);

//typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof johnAge);

/******************
 * Operator Precedence
 */

//  var now = 2020; 
//  var yearJohn = 1989;
//  var votingAge = 18;
//  var isVotingAge = now -yearJohn >= votingAge;

 //Grouping 

//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

 //Multiple Assignments
//  var x,y;
//  x = y =(3+5) *4-6//8
// console.log(x);
// console.log(y);

//More operators 
// x *=2;// x = x * 2; 
// x +=2;// x = x + 2;
// x /=2;// x = x / 2; 
// x -=2;// x = x - 2; 

// console.log(x);
// x++; // x = x + 1; 
// x--; // x = x - 1; 

/***************
 * if else statement
 */



// var firstname = prompt('what is your first name?');
// console.log(firstname);

// var lastname = prompt('what is your last name?');
// console.log(lastname);

// console.log(firstname + lastname);

//Create a function called 'add' that takes in
//two parameteres and returns their sum. Then print the sum.


// function add(num1, num2){

//     console.log(num1 + num2);
//     return num1 + num2 
// }

//     var sum = add;
// add(40,30);

//create a 'welcome' function that takes in 
//a name and weekday and prints:
//"Hello [name]! I hope you are enjoying our [weekday]!"
// function greet(name, weekday){
//     console.log('Hello ' + name + '! I hope you are enjoying your ' + weekday);
// }
// greet('Jaden', 'tuesday');

//practice prblm
// function grading (grade){
    
//     if (grade >= 92 && grade <= 100){
//         console.log("You recieved A for the grade")
//     }else if(grade >= 84 && grade < 92){
//         console.log("you recieved B for the grade")
//     }else if(grade >=76 && grade < 84){
//         console.log("you recieved C for the grade")
//     }else if(grade >= 69 && grade < 76){
//         console.log("you recieved D for the grade")
//     }else{
//         console.log("you recieved F for the grade")
//     }
//     return grade;
// }

// var grade = add

// grading(93);
// grading(30);

// create a function called 'thermometer' that takes in a temperature, and calculate if they have a cold fever 
//(or if they don't, return 0)
//Fever -> > 99
//Cold -> <96
// ex : thermometer (94.2);
// This should return -1.8 
// ex: thermometer (102);
// This should return 3

    // function thermometer (temperature){

    //     if( temperature >  99){
    //         console.log( 'You have a Fever !');
    //     }else if( temperature < 96){
    //         console.log( 'You have a Cold !');
    //     }else{
    //         console.log( ' You are fine !');
    //     }
    //     return temperature;

    // }

    // thermometer(94.2);

    //create an array that stores 5 test scores, print the third test score

    // var testScore = [ 89, 45 , 78, 99, 100];
    // console.log(testScore[2]);

    //create a 'car' object that stores the following varialbes and functions:
    //variables: year, brand. color. owner
    //functions: speedUp, slowDown


// car.speedUp(5);
// console.log(car.speed);

// car.slowDown(5);
// console.log(car.speed);


//////////////

// function thermometer(temperature){

//     var diffTemp;
//     if(temperature > 99) {
//         console.log('You have a fever !');
//         diffTemp = temperature - 99;
//     }else if(temperature < 96){
//         console.log('You have a cold!');
//         diffTemp = temperature - 96;
//     }else{ //neither
//         console.log('You are healthy!');
//         diffTemp = 0;
//     }

//     return diffTemp;
// }
// //끝난건 아님


// var car = {
    //         year: 2020,
    //         brand: 'RangeRover',
    //         color: 'black',
    //         owner: 'Jaden Lee',
    //         speed: 60,
    //         speedUp: function(increaseSpeed){
    //             console.log('The car speeds up by ' + (increaseSpeed) + 'mph');
    //             this.speed += increaseSpeed;// this.speed = this.speed + increaseSpeed;
    //         },
    //         slowDown: function(decreaseSpeed){
    //             console.log('The car slows down by ' + ( decreaseSpeed) + 'mph');
    //             this.speed -= decreaseSpeed;
    
    //         }
    //     };
    
    // car.speedUp(5);
    // console.log(car.speed);
    
    // car.slowDown(5);
    // console.log(car.speed);
    



    // INITIALIZE NEW ARRAY

    // var names = ['Jaden', 'zach', 'John', 'Sarah'];
    // console.log(names[0]);
    // console.log(names.length);

    // //Mutate array data 
    // console.log(names);
    // names[1] = 'Sam';
    // names[names.length - 1] = 'Mary';
    // console.log(names);

    // //create an array that stores 5 test scores, print the third test score

    // var testScore = [87, 90, 95, 67, 77];

    // //Different data values
    // var John = ['John', 'Smith', 1990, 'designer',false];
    // console.log(John);
    // John.push('blue');
    // John.unshift('Mr.');
    // console.log(John);
    // John.pop(); 
    // John.pop();

    // console.log(John);

    // console.log(John.indexOf('Jaden'));

    // console.log(names.indexOf('Jaden'));
    // if (names.indexOf('Jaden')=== -1){
    //     console.log('Jaden is not in my class!!');
    // }else{
    //     console.log('Jaden is in class');
    // }

    // var inClass = names.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
    // console.log(isDesigner);



    //print odd numbers between 0 and 20

     for ( var i = 0; i <=20; i++){

        if( i % 2 ){
            console.log(i);
        }
        
    }

    // var num = 7;
    // if(num % 2 === 1){
    //     console.log(num + ' is odd number');
    // }else{
    //     console.log(num + 'is even number');
    // }