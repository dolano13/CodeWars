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

//6.11.19
//https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript
function maps(x) {
  return x.map(num => num * 2);
}

//6.12.19
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {
  var small = numbers[0];
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
//https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
function abbrevName(name) {
  let x = name.split(" ");
  return (x[0][0] + "." + x[1][0]).toUpperCase();
}
//https://www.codewars.com/kata/welcome/train/javascript
function greet(language) {
  let greeting = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
  };
  if (greeting[language]) {
    return greeting[language];
  } else {
    return greeting.english;
  }
}
//https://www.codewars.com/kata/simple-multiplication/train/javascript
