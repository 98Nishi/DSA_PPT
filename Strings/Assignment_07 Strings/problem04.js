/*
557. Reverse Words in a String III
Q4: Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc" */

const reverseWords = function(s) {
    // Split the input string into an array of words 
    let sol = s.split(" ").map((word) => {
      // Split the word into an array of characters
      let rev = word.split("");
      
      // Reverse the characters in the word using a two-pointer approach
      for (let i = 0, j = word.length - 1; i < j; i++, j--) {
        // Swap characters at positions i and j
        let temp = rev[i];
        rev[i] = rev[j];
        rev[j] = temp;
      }
      
      // Join the reversed characters back into a string
      return rev.join("");
    });
    
    // Join the reversed words array back into a string 
    return sol.join(" ");
  };
  const  s = "Let's take LeetCode contest";
  const revWord = reverseWords(s);

  console.log(revWord);//  "s'teL ekat edoCteeL tsetnoc"