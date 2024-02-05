// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.


function celsToFar(celcius){
    const celsToFarhen = (celcius * 9/5) + 32;
    return celsToFarhen; 
}

console.log(celsToFar(23));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countRepeat(arr,find){
    let count = 0;
    for(item of arr){
        if(item === find){
            count++;
        } else{
            count;
        }
    }
    return count;
}
const numbers = [5,6,11,12,98,5];
console.log(countRepeat(numbers,5));

// Task-3:
// Write a function to count the number of vowels in a string.
let count = {};
let vowel = [];
function countVowels(string){
    const arr = string.split('');
    for(let item of arr){
        if(item.includes('a') || item.includes('e') || item.includes('i') || item.includes('o') || item.includes('u')){
            vowel.push(item);
            for(let vow of item){
                if(count[vow]){
                    count[vow]+= 1;
                } else{
                    count[vow] = 1;
                }
            }
        }

    }
    return count;
}

const str  = 'i have a book do you have?'
console.log(countVowels(str));

// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

function longWord(str){
    let longest = '';
    let charCount = 0;
    const arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > charCount){
            charCount += longest.length;
            longest = arr[i];
        }
    }
    return longest;
}
const word = 'I am learning Programming to become a programmer';
console.log(longWord(word))

// Task-5:
// Generate a random number between 10 to 20.

const random = Math.random();
const gene = random*10 + 10;
const round = Math.round(gene);
console.log(round);


// Task -6:
// Convert inch to feet

function inchToFeet(inch){
    const inch_to_feet = inch / 12;
    const feet = parseInt(inch_to_feet);
    const inches = inch % 12;
    const result = `${feet}ft ${inches}inch `;
    return result;
}

console.log(inchToFeet(75));


