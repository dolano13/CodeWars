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
//6.13
//https://www.codewars.com/kata/even-or-odd/train/javascript
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//https://www.codewars.com/kata/simple-multiplication/train/javascript
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
//https://www.codewars.com/kata/cat-years-dog-years/train/javascript
let humanYearsCatYearsDogYears = function(humanYears) {
  let CatYears = 0;
  let DogYears = 0;

  if (humanYears === 1) {
    CatYears = 15;
    DogYears = 15;
  } else if (humanYears === 2) {
    CatYears = 24;
    DogYears = 24;
  } else {
    CatYears = 24 + (humanYears - 2) * 4;
    DogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, CatYears, DogYears];
};
//https://www.codewars.com/kata/returning-strings/train/javascript
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}
//https://www.codewars.com/kata/keep-up-the-hoop/train/javascript
function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
//https://www.codewars.com/kata/how-good-are-you-really/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  let classPointsavg = ([] + yourPoints) / classPoints.length;
  if (classPointsavg < yourPoints) {
    return true;
  } else {
    return false;
  }
}
//6.14.19
//https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
function makeUpperCase(str) {
  return str.toUpperCase();
}
//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - (a + b);
}
//6.15.19
//https://www.codewars.com/kata/total-amount-of-points/train/javascript
function points(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    let each = games[i].split(":");
    if (each[0] > each[1]) {
      points += 3;
    } else if (each[0] == each[1]) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}
//https://www.codewars.com/kata/grasshopper-summation/train/javascript
var summation = function(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
//6.17.19
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
  let newA = [];
  for (x = 0; x <= array.length - 1; x++) {
    if (array[x] > 0) {
      newA[x] = array[x] - array[x] * 2;
    } else newA[x] = Math.abs(array[x]);
  }
  return newA;
}
//https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript
var countSheep = function(num) {
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
};
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(string) {
  return string
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}
//6.24.19
//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
function encrypt(text, n) {
  let firstChar = "";
  let secondChar = "";
  let encrypted = text;
  if (n <= 0 || text === null) {
    return encrypted;
  } else {
    for (var i = 0; i < text.length; i++) {
      if (i % 2) {
        secondChar += text[i];
      } else {
        firstChar += text[i];
      }
    }
    encrypted = secondChar + firstChar;
    return encrypt(encrypted, n - 1);
  }
}

encrypt(null, 2);

function decrypt(encryptedText, n) {
  let decrypted = encryptedText;
  if (n <= 0 || encryptedText === null) {
    return decrypted;
  } else {
    let midPoint = Math.floor(encryptedText.length / 2);
    let secondChar = encryptedText.slice(0, midPoint);
    let firstChar = encryptedText.slice(midPoint);
    decrypted = "";
    var stopLoop = firstChar.length;
    for (var i = 0; i < stopLoop; i++) {
      if (secondChar[i] === undefined) {
        decrypted += firstChar[i];
      } else {
        decrypted += firstChar[i] + secondChar[i];
      }
    }
    return decrypt(decrypted, n - 1);
  }
}
//https://www.codewars.com/kata/the-highest-profit-wins/train/javascript
function minMax(arr) {
  let min = Math.min.apply(null, arr),
    max = Math.max.apply(null, arr);
  return [min, max];
}
//6.25.19
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
var number = function(busStops) {
  let ppl = 0;
  for (let i = 0; i < busStops.length; i++) {
    ppl += busStops[i][0];
    ppl -= busStops[i][1];
  }
  return ppl;
};
//https://www.codewars.com/kata/disemvowel-trolls/train/javascript
function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}
//https://www.codewars.com/kata/vowel-count/train/javascript
function getCount(str) {
  let vwls = ["a", "e", "i", "o", "u"];
  return str.split("").filter(letter => {
    return vwls.includes(letter) ? true : false;
  }).length;
}
//6.26.19
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  let newArray = [];
  if (numbers.length > 1) {
    let smallest = numbers[0];
    for (i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    for (x = 0; x < numbers.length; x++) {
      if (x === numbers.indexOf(smallest)) {
      } else {
        newArray.push(numbers[x]);
      }
    }
  }
  return newArray;
}
