//6.10.19
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
//https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/train/javascript
function findSum(n) {
  let answer = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer += i;
    }
  }
  return answer;
}
