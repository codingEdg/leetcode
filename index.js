console.log("program starts");

// Todo leetcode problems
{
  //* Longest substring
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
    // console.log(subs);
  }

  // * Maiden of two sorted arrays
  {
    /*
                Input: nums1 = [1,3], nums2 = [2]
                Output: 2.00000
                Explanation: merged array = [1,2,3] and median is 2.
                Example 2:

                Input: nums1 = [1,2], nums2 = [3,4]
                Output: 2.50000
                Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
     */
    function findMedianSortedArrays(nums1, nums2) {
      // Merge the two sorted arrays
      let merged = mergeSortedArrays(nums1, nums2);
      const len = merged.length; // Calculate the length of the merged array

      // Check if the length is odd
      if (len % 2 !== 0) {
        // If odd, return the middle element
        return merged[Math.floor(len / 2)];
      } else {
        // If even, return the average of the two middle elements
        const mid = len / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
      }
    }

    function mergeSortedArrays(nums1, nums2) {
      let merged = [];
      let i = 0,
        j = 0;

      // Merge the arrays while iterating through them
      while (i < nums1.length && j < nums2.length) {
        // Compare elements of both arrays and add the smaller one to the merged array
        if (nums1[i] < nums2[j]) {
          merged.push(nums1[i]);
          i++;
        } else {
          merged.push(nums2[j]);
          j++;
        }
      }

      // Add remaining elements of nums1
      while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
      }

      // Add remaining elements of nums2
      while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
      }

      // Return the merged array
      return merged;
    }

    // let nums1 = [1,3], nums2 = [2]
    let nums1 = [1, 2],
      nums2 = [3, 4];
    let s = findMedianSortedArrays(nums1, nums2);
    console.log(s);
  }

  // * add two numbers
  {
    /*
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
    
     */
    const Node = function (val, next = null) {
      this.val = val === undefined ? 0 : val;
      this.next = next;
    };

    const addTwoNumbers = function (l1, l2) {
      if (!l1.length || !l2.length) return null;
      let dummyHead = new Node(0);
      let current = dummyHead;
      let carry = 0;

      while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
      }
      return dummyHead.next;
    };
  }
}

// Todo : array method Polyfills
{
}

console.log("program ends");
