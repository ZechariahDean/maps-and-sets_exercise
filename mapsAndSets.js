/** new Set([1,1,2,2,3,4]) returns: a set containing the values [1,2,3,4]

[...new Set("referee")].join("") returns a string "refr"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); it will be a map with the first array as the key for true and a second array as the key for false.

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate **/
const hasDuplicate = (arr) => [...new Set([...arr])].length === arr.length ? false : true; 

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values 
// are the count of the vowels in the string.
const vowelCount = string => {
    const vowelMap = new Map();
    for (let char of string){
        if (('aeiou'.includes(char.toLowerCase()))) {
            if (vowelMap.get(char.toLowerCase()) === undefined) vowelMap.set(char.toLowerCase(), 1);
            else vowelMap.set(char.toLowerCase(), vowelMap.get(char.toLowerCase()) + 1);
        };
    };
    return vowelMap;
}