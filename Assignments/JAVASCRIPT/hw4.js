/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

//OBJECT

var john = {
    name : 'John', 
    weight : 80,
    height : 180,
    calcBmi: function(){
       return this.weight / (this.height * this.height);
    }
};

var mark = {
    name : 'Mark', 
    weight : 70,
    height : 199,
    calcBmi: function(){
        return this.weight / (this.height * this.height);
    }
};

    if( mark.calcBmi() > john.calcBmi()){
        console.log( 'Mark Bmi value is bigger than John Bmi value by ' + (mark.calcBmi() - john.calcBmi()));
    }else if(john.calcBmi() > mark.calcBmi()){
        console.log( 'John Bmi value is bigger than Mark Bmi value by ' + (john.calcBmi() - mark.calcBmi()));
    }else{
        console.log( ' The Bmi value is the same between Mark and John ');
    }
