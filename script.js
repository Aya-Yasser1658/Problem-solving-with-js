/*Task 1 */
function sumArray(){
    const input=prompt("Enter array of numbers: ")
    const arr=input.split(",").map(Number)

    let sum=0
    for(i=0;i<arr.length; i++){
        sum +=arr[i]
    }
    return sum
}
const result =sumArray()
console.log("The sum of array is: " + result)

/*Task 2*/
function findLargestNumber(numbers) {
    let largest = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest
}
const numbers=[6,8,5,1,9,2,7]
const lagestNumber=findLargestNumber(numbers)
console.log("the largest number in the array is: "+ lagestNumber)

/*Task 3*/
function reverseString(str) {
    return str.split('').reverse().join('');
}
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Reversed string: " + reversedString); 

/*Task 4*/

function removeDuplicates(numbers) {
    
    return [...new Set(numbers)]
}
const originalArray = [7,5,5,9,12,8,8,8,2,3,1,6,4]
const uniqueArray = removeDuplicates(originalArray)
console.log("Array without duplicates: ", uniqueArray) 
