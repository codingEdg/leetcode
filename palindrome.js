/*
9. Palindrome Number
Solved
Easy
Topics
Companies
Hint
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
*/

/*
{ 
    function isPalindrome (nums){
        if(!nums.toString().length) return false
return nums.toString() === nums.toString().split("").reverse().join("")
    }

let res1 =     isPalindrome(121)
let res2 = isPalindrome(232)
let res3 = isPalindrome(235)
console.table({res1,res2,res3})
}
*/

{
    function isPalindrome (nums){
        if(nums < 0) return false
        let original  = nums
        let reversed = 0
        while (nums > 0){
            reversed = reversed * 10 + nums % 10      
            console.log(reversed)
            nums = Math.floor(nums/10)
        }
        return original === reversed

    }

let res1 =     isPalindrome(12321)
let res2 = isPalindrome(232)
let res3 = isPalindrome(235)
let res4 =     isPalindrome(12345)
console.table({res1,res2,res3, res4})
}

/*
{
function isPalindrome(nums) {
    console.log(nums)
    nums = nums.toString();
    if (nums.length <= 1) return true;
    if (nums[0] !== nums[nums.length - 1]) return false;
    return isPalindrome(nums.slice(1, nums.length - 1));
}
    let res1 =     isPalindrome(12321)
let res2 = isPalindrome(232)
let res3 = isPalindrome(235)
let res4 =     isPalindrome(12345)
console.table({res1,res2,res3, res4})
    
}
*/