function isPalindrome(word) {
  let j = word.length - 1
  for (let i = 0; i < word.length / 2; i++){
    console.log(word[i] , word[j], i, j,  word.length / 2)
    if (word[i] != word[j]) {
      return false
    }
    j--;
  }
  console.log(word, j, word.length, word[word.length], word[j])
  return true
}

/* 
  Add your pseudocode here
  Function IS_PALINDROME(word):
    // Step 1: Initialize pointer j to the index of the last character
    j = LENGTH_OF(word) - 1
    
    // Step 2: Loop through the first half of the string
    FOR i FROM 0 TO FLOOR(LENGTH_OF(word) / 2) - 1:
        // Print debugging information (optional)
        PRINT word[i], word[j], i, j, FLOOR(LENGTH_OF(word) / 2)
        
        // Step 3: Compare characters from both ends
        IF word[i] IS NOT EQUAL TO word[j] THEN
            RETURN FALSE // Not a palindrome
        END IF
        
        // Move the pointer j towards the beginning
        j = j - 1
    END FOR
    
    // Print debugging information (optional)
    PRINT word, j, LENGTH_OF(word), word[LENGTH_OF(word) - 1], word[j]
    
    RETURN TRUE // The string is a palindrome
END FUNCTION

  
*/

/*
  Add written explanation of your solution here
  The isPalindrome function works by:

Initializing a pointer j at the end of the string.
Iterating through the first half of the string with another pointer i.
Comparing characters from the start and end, moving towards the center.
If all character comparisons are successful, the function confirms the string is a palindrome; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
