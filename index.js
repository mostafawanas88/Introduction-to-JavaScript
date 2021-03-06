/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
if (votingAge > 18) {
    console.log(true);
} else {
     console.log(false)
};


console.log('hello world');


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let height = 175;
let age = 32;
if (age > 75) {
    height = 168;
}
console.log(height);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = "1999";
let strToNum = Number(str);
console.log(strToNum);




//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return a * b;
}
multiply(3,2);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function ageInDogYears(age) {
    return age * 7;
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// input: dog age (number), dog weight (number)
// output: feed required (number)
// execution: if dog is 1 year or above --> check weight and depending on that determine amount of food
// execution: if dog is less than a year --> check age as %, determine amount as % of body weight

const dogFeeder = (age,weight) => {
    // variable for total raw food
    let rawFood;
    // if dog is younger than 2 months, he only gets milk -- no raw food
    if (age < 0.167) {
       rawFood = 0;
    } else if (age >= 0.167 && age < 1) { // if dog is older than 2 months but less than 1 year
      if (age >= 0.167 && age <= 0.33) {
            rawFood = 0.10 * weight;
        } else if (age > 0.33 && age <= 0.583) {
            rawFood = 0.05 * weight;
        } else {
            rawFood = 0.04 * weight;
        }
    } else { // if dog is 1 year or older
        if (weight <= 5) {
            rawFood = 0.05 * weight;
        } else if (weight > 5 && weight <= 10) {
            rawFood = 0.04 * weight;
        } else if (weight > 10 && weight <= 15) {
            rawFood = 0.03 * weight;
        } else {
            rawFood = 0.02 * weight;
        }
    }
    return rawFood;
}    




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const game = (userChoice) => {
    let resultString;
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = 'Rock';
    } else if (computerChoice === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    if (userChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            resultString = 'Computer Won!';
        } else if (computerChoice === 'Rock') {
            resultString = 'Draw!';
        } else {
            resultString = 'Player Won!';
        }
    } else if (userChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            resultString = 'Draw!';
        } else if (computerChoice === 'Rock') {
            resultString = 'Player Won!';
        } else {
            resultString = 'Computer Won!';
        }
    } else if (userChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            resultString = 'Player Won!';
        } else if (computerChoice === 'Rock') {
            resultString = 'Computer Won!';
        } else {
            resultString = 'Draw!';
        }
        } else {
          resultString = 'Error! Please Insert Correct Input!'
        }
    return resultString;
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMiles = (km) => {
    let mile = km / 1.609;
    return mile;
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetToCM = (feet) => {
    let cm = feet * 30.48;
    return cm;
}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const annoyingSong = (num) => {
    while (num > 0) {
        console.log(`${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${num - 1} bottles of soda on the wall`);
        num--;
    }
}

// 99, 99, 99
// 98, 98, 


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const gradeCalc = (mark) => {
    if (mark >= 90) {
        return 'A'
    } else if (mark >= 80) {
        return 'B'
    } else if (mark >= 70) {
        return 'C'
    } else if (mark >= 60) {
        return 'D' 
    } else {
        return 'F';
    }
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const countVowels = (str) => {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i].toLowerCase() === vowels[j]) {
                count++
            }
        }
    }
    return count;
}

console.log(countVowels('hello'));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





