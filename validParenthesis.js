/*
20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
*/
{
    const s = "()";
    const ss = "(]";
    
    const isValid = (str) => {
      if (!str.length) return false;
    
      const map = {
        "}": "{",
        "]": "[",
        ")": "("
      };
    
      let stack = [];
      for (const item of str) {
        if (item === "{" || item === "[" || item === "(") {
          stack.push(item);
        } else {
          const topelem = stack.length === 0 ? "#" : stack.pop();
          if (topelem !== map[item]) {
            return false;
          }
        }
      }
      return stack.length === 0;
    };
    
    let res = isValid(ss);
    console.log({ res });
    
}