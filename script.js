//program to reverse a string
function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("nishant"));

//program to check palindrome
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("")
    return str === reversed
}
console.log(isPalindrome("mom"));

//to find the largest element in an array
function findLargest(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
console.log(findLargest([56, 78, 98, 67]))

//to remove the first element in an array
let number = [56, 98, 87, 90, 45, 78]
number.shift()
console.log(number)

//to create a new arrow function
let sum = (a, b) => {
    return (a + b)
}
let result = sum(2, 4)
console.log(result)

//to add property to an object
student = {
    name: "nishant",
    age: 21
}
console.log(student)

//to delete a property in object
student = {
    name: "nishant",
    age: 21
}
delete student.age;
console.log(student)

//to understand the concept of reduce method of array
let arr = [7, 9, 7, 8, 3, 6, 1]
let sumof = arr.reduce((prev, curr) => {
    return (prev + curr)
})
console.log(sumof);

//to understand the concept of repeat method of array
let str = "nishant"
let str3 = str.repeat(3)
console.log(str3)

//to check prime or not
function isPrime(num) {
    if (num <= 1)
        return false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
        else {
            return true
        }
    }
}
console.log(isPrime(7));

//to print the fibonacii series
function fibonacii(num){
    let num1=0,num2=1,nextNum;
    for(let i=1;i<=num;i++){
        console.log(num1)
        nextNum=num1+num2;
        num1=num2;
        num2=nextNum;
    }
}
console.log(fibonacii(8))