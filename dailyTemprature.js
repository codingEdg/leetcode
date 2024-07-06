/*
739. Daily Temperatures
Medium
Topics
Companies
Hint
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 


*/

// {
// //    const temperatures = [73,74,75,71,69,72,76,73] 
//    const temperatures = [73,74,75,71] 
//    function dailyTemperature(arr){
//     if(!arr.length) return
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         let elem = arr[i];   //73 //74
//         let count = 0
//         for (let j = 1+i; j < arr.length; j++) {
//             let element = arr[j]; // 74 //75
//             let nextelem = arr[j+1]; //75 //71
//             if(element > elem){
//                 count++
//                 if(element < nextelem){
//                     count += 1
//                     break
//                 }
//                 res.push(count)

//             }else{
//                 res.push(0)
                
//                 break
//             }
//         }
//         res.push(0)
//     }
    
//     return res
//    }
//    let result = dailyTemperature(temperatures)
//    console.log(result)
// }

{
    function dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0); // Initialize the result array with zeros
        const stack = []; // Initialize the stack
    
        for (let i = 0; i < temperatures.length; i++) {
            // Log the current temperature at the index stored at the top of the stack
            // console.log({i})
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                 console.log(`Popped index: ${stack[stack.length - 1]}`);
                const idx = stack.pop(); // Get the index from the top of the stack
                res[idx] = i - idx; // Calculate the number of days and store it in the result array
                console.log("res",res)
            }
            stack.push(i); // Push the current index onto the stack
        }
    
        return res;
    }
    
    // Test cases
    const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
    const temperatures2 = [30, 40, 50, 60];
    const temperatures3 = [30, 60, 90];
    const temperatures4 = [73, 74, 75, 71];
    
    // console.log(dailyTemperatures(temperatures1)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
    // console.log(dailyTemperatures(temperatures2)); // Output: [1, 1, 1, 0]
    // console.log(dailyTemperatures(temperatures3)); // Output: [1, 1, 0]
    // console.log(dailyTemperatures(temperatures4)); // Output: [1, 1, 0, 0]
    
}

