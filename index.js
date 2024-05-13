console.log("program starts");

// Todo leetcode problems
{
  // Longest substring
  {
    /*
                Given a string s, find the length of the longest 
                substring
                 without repeating characters.
                
                
                
                Example 1:
                
                Input: s = "abcabcbb"
                Output: 3
                Explanation: The answer is "abc", with the length of 3.
                Example 2:
                
                Input: s = "bbbbb"
                Output: 1
                Explanation: The answer is "b", with the length of 1.
                Example 3:
                
                Input: s = "pwwkew"
                Output: 3
                Explanation: The answer is "wke", with the length of 3.
                Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
                
                */
    const lengthOfLongestSubstring = function (s) {
      let map = new Set();
      let maxLen = 0;
      let start = 0;

      for (let i = 0; i < s.length; i++) {
        while (map.has(s[i])) {
          map.delete(s[start++]);
        }
        maxLen = Math.max(maxLen, i - start + 1);
        map.add(s[i]);
      }

      return maxLen;
    };
    let subs = lengthOfLongestSubstring("abcabcabcbb");
    console.log(subs);
  }
}

// Todo : array method Polyfills
{
}

console.log("program ends");
