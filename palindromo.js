 function findLargestPalindrome(words) {
    let palindrome = ""
    words.forEach(element => {
        const reverse = element.split('').reverse().join('')
        if ( element === reverse && reverse.length > palindrome.length) 
        {
            palindrome = reverse;   
        }
    });
    return palindrome === "" ? null : palindrome;
  }
  
  console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]))