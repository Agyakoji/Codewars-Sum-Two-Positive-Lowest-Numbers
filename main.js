// Return an array, where the first element is the count of positive numbers 
// ...and the second element is the sum of negative numbers

//                         // SOLUTION 1
// declare a function taking an array of positive and negative nums
function sumOfPositiveAndNegativeNumbers(arr){

    // declare a variable to store the count of all positive nums
    let positiveNumsCount = arr.filter( x => x > 0).length

    // declare a variable to store the sum of the negative nums
    let sumOfNegativeNums = arr.filter( x => x < 0).reduce((acc, c) => acc + c, 0)

    // declare a variable to hold both the count and sum of positive and negative numbers
    let arrOfPositiveCountAndNegativeSum = [positiveNumsCount, sumOfNegativeNums]

    // return the count and sum of array elements as an array
    return arrOfPositiveCountAndNegativeSum 
    
}
alert(sumOfPositiveAndNegativeNumbers([1,2,3,4,5,6,-1,-2,-3,-4,-5]))


//                         // SOLUTION 2
// function sumOfPositiveAndNegativeNumbers(arr){
//     let arrOfPositiveCountAndNegativeSum = [arr.filter( x => x > 0).length, arr.filter( x => x < 0).reduce((acc, c) => acc + c, 0)]
//     return arrOfPositiveCountAndNegativeSum 
// }
// alert(sumOfPositiveAndNegativeNumbers([1,2,3,4,5,6,-1,-2,-3,-4,-5]))


//                         //// SOLUTION 3: Using Tenary Operator
// function countPositivesSumNegatives(input){
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((acc, c) => acc + c, 0)] : []
// }
// alert(countPositivesSumNegatives([1,2,3,4,5,6,-1,-2,-3,-4,-5]))