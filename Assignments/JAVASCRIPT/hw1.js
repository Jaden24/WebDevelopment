/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 which is the same thing as mass / (height * height). 
(mass in pounds and height in inches).

**You can initialize Mark and John's height and weight to any values you want

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var markHeight = 180;
var markWeight = 78;

var johnHeight = 168;
var johnWeight = 93; 

//BMI value for Mark 
var totalMark =  markWeight / ( markHeight * markHeight);
//BMI value for John 
var totalJohn =  johnWeight / (johnHeight * johnHeight);

console.log('Is Mark BMI higher than John?')
if(totalMark > totalJohn){
    console.log('Yes, Mark has a higher BMI than John')
}else{
    console.log('No, Mark has a lower BMI than John')
}

