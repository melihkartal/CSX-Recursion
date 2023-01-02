// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

console.log('Hello, world!');

function repeater(char) {
	
 if(char.length === 5)
   return char;
  
  return repeater(char[0]+char);
  
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

