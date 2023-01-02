// Get the length of an array using recursion without accessing its length property.

function getLength(array,counter = 0, index = 0) {
  
  
    if(!array[0])
      return counter;
  
    else{
           counter = counter + 1;
      index = index + 1;
      array = array.slice(1);
      
      return getLength(array, counter , index);
    }
    
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(getLength([1])); // -> 1
  console.log(getLength([1, 2])); // -> 2
  console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  console.log(getLength([])); // -> 0
  