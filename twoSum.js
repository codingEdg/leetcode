/*
1. Two Sum
Solved
Easy
Topics
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


/* approach


*/

const  numsArr = [2,7,11,15], target = 9

/*
function findTwoSum (nums, target){
    let res = []
    for (let item of nums){
        for (let elem of nums){
            if((elem + item) === target ){
                res.push(nums.indexOf(elem), nums.indexOf(item))
                return res.sort((a,b)=>a-b)
            }
        }
    }
    return res.sort((a,b)=>a-b)
}
 
let result = findTwoSum(numsArr, target)
console.log(result)
*/
/*

let res = []
numsArr.forEach((elem, ind, arr) => {
    arr.forEach((item, index)=> {
        if(res.length) return
        if((elem +item) === target ){
            res.push(ind, index)
            return
        }
    })
});
console.log(res)

*/

/*

let res = numsArr.reduce((acc, elem,ind, arr)=>{
    if(acc.length) return acc
    arr.forEach((item, index)=>{
        if((elem+item)===target){
            acc.push(ind, index)
            return
        }
    })
    return acc
},[])
console.log(res)


*/
/*
{

    const numsArr = [2,7,11,15], target = 18
    function twoSumFind(nums, target){
    let res = []
    for(let elem of nums){
        let secondOne = target-elem
        if(res.length) return  res
        if((elem+ secondOne)===target){
           if(nums.includes(secondOne)){
               res.push(nums.indexOf(elem), nums.indexOf(secondOne))
            return res
        }
        }

    }
    return res
}

let result = twoSumFind(numsArr, target)
console.log(result)
}
*/

{ // better approach
    
    function sumOfTwo(nums, target){
        let indMap = {}
        for (let i = 0; i < array.length; i++) {
            const complement =target - nums[i];
            if(indMap.hasOwnProperty(complement) ){
                return [nums.indexOf(complement), i]
            }
            indMap[nums[i]] = i
            
            
        }
        return []
    }
}

{// more better approach
    const numsArr = [2,7,11,15], target = 18
    
    function leetcodeFindTwoSum(nums, target){
        // clone arr with index
        let cloneArr = nums.map((elem, ind)=> [elem, ind])
        // sort cloned arr
        cloneArr.sort((a, b) => a[0] - b[0]);

        let left = 0, right = cloneArr.length-1
        while(left < right){
            let sum = cloneArr[left][0] +cloneArr[right][0]
            if(sum === target){
                return [cloneArr[left][1], cloneArr[right][1]]
            }
            if(sum < target){
                left++
            }else {
                right--
            }
        }

        return []
    }

    let result = leetcodeFindTwoSum(numsArr, target)
    console.log(result)

}