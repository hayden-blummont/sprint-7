// MINIMUM

// Your code here.
var min = function(x, y) {
    if (x < y) {
      return x;
    }
  else {
    return y;
  }
};
x = 14, y = 12;
console.log(min(x, y));

// RECURSION

// Your code here.
var isEven = function(num) {
    num = Math.abs(num);
  if (num === 0)
      return true;
  else if (num === 1)
      return false;
  else
      return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// BEAN COUNTING

// Your code here.
var countBs = function(str) {
    return str.match(/b/gi).length;
};

var countChar = function(str, character) {
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("fapapafa", "a"));