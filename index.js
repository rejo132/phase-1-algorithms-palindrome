// index.js

function isPalindrome(word) {
  // Get the length of the word
  const len = word.length;
  // Check characters from start and end up to the middle
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false; // Return false if any pair doesn’t match
    }
  }
  return true; // Return true if all pairs match
}

/* 
  Pseudocode:
  - Take a string input called word
  - Get the length of the string
  - Loop from index 0 to half the length
    - Compare character at current index with character at mirror index (length - 1 - current)
    - If they don’t match, return false
  - If loop completes without mismatches, return true
*/

/*
  Explanation:
  This solution checks if a string is a palindrome by comparing characters from both ends moving inward. 
  - We only need to check up to half the string because each iteration compares two characters (start and end).
  - If any pair doesn’t match, we return false immediately since it can’t be a palindrome.
  - If all pairs match, we return true, confirming the string is a palindrome.
  - Time complexity is O(n/2) ≈ O(n), where n is the string length, and space complexity is O(1) since we use no extra space beyond a few variables.
  - The function assumes lowercase letters only, per the lab’s constraints, so no additional sanitization is needed.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Provided tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional custom tests
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // Single letter

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // Two different letters

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam")); // Another palindrome
}

module.exports = isPalindrome;