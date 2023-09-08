/*
const a = -3;
const b = 5;
let arr = [];
let result = 0;

for (let i = a; i <= b; i++) {
  arr.push(i);
}

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}

function isTriangle(a, b, c) {
  if (a + b > c) {
    if (a + c > b) {
      if (b + c > a) {
        return true;
      }
    }
  }
  return false;
}
function grow(x) {
  let suma;
  for (let i = 0; i < x.length; i++) {
    suma *= x[i];
  }
  return suma;
}
function oddOrEven(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  if (suma % 2) {
    return "odd";
  } else {
    return "even";
  }
}
let arr = [];
let data = "AAAAAAAA";

for (let i = 0; i < data.length; i++) {
  arr.push(data[i]);
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "A") {
    arr[i] = "T";
  } else if (arr[i] === "T") {
    arr[i] = "A";
  }
  if (arr[i] === "C") {
    arr[i] = "G";
  } else if (arr[i] === "G") {
    arr[i] = "C";
  }
}
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
function accum(s) {
  s = s.toLowerCase();
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    result += s[i].repeat(i);
    result += "-";
  }
  result = result.slice(0, -1);
  return result;
}
function openOrSenior(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] >= 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  }
  return 0;
}
function number(busStops) {
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    result += busStops[i][0];
    result -= busStops[i][1];
  }
  return result;
}
function domainName(url) {
  let webSite = url;

  webSite = webSite.replace("http://", "");
  webSite = webSite.replace("https://", "");
  webSite = webSite.replace("www.", "");
  webSite = webSite.slice(0, webSite.indexOf("."));

  return webSite;
}
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}
function findShort(s) {
  let arr = [];

  arr = s.split(" ");
  arr.sort(function (min, max) {
    return min.length - max.length;
  });
  return arr[0];
}
function alphabetPosition(text) {
  let result = "";
  const letter = text.toLowerCase();
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === " ") {
      result += "";
    } else if (alphabet.hasOwnProperty(letter[i])) {
      result += alphabet[letter[i]];
      result += " ";
    }
  }
  return result.trim();
}
function highAndLow(numbers) {
  let arr = numbers.split(" ");
  const minNumber = Math.min(...arr);
  const maxNumber = Math.max(...arr);
  const result = maxNumber.toString() + " " + minNumber.toString();
  return result;
}
function noSpace(x){
  return x.split(" ").join("");
}
function rowSumOddNumbers(n) {
    return n*n*n;
}
function abbrevName(name){
  let arr = name.split(" ");
  let result = arr[0][0]+ "." + arr[1][0] + ".";
  return result;
}
function duplicateCount(text) {
  let result = 0;
  let arr = text.toLowerCase().split("").sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result++;
      while (arr[i] === arr[i + 1]) {
        i++;
      }
    }
  }
  return result;
}
function digitize(n) {
    return n.toString().split("").reverse().map((i) => parseInt(i));
  }
function persistence(num) {
    if (num < 10) {
      return 0;
    }
    let count = 0;
    while (num >= 10) {
      let str = num.toString();
      let ind = 1;
      for (let i = 0; i < str.length; i++) {
        ind *= parseInt(str[i]);
      }
      
      num = ind;
      count++;
    }
    
    return count;
  }
function greet(str) {
  return "hello world!";
}

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function deleteNth(arr, n) {
  let result = [];
  let count = [];
  for (let num of arr) {
    if (!count[num]) {
      count[num] = 1;
      result.push(num);
    } else if (count[num] < n) {
      count[num]++;
      result.push(num);
    }
  }
  return result;
}
function sumArray(array) {
if (array === null || !Array.isArray(array) || array.length <= 1) {
        return 0;
    }
    const sortedArray = [...array].sort((a, b) => a - b);
    const slicedArray = sortedArray.slice(1, -1);
    const res = slicedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return res;
}

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}

function binaryArrayToNumber(arr) {
  const replace = arr.reduce((acc, val) => acc + val, "");
  return parseInt(replace, 2);
}
function repeatStr (n, s) {
  return s.repeat(n);
}

function sumMix(x){
  let result = 0;
  return x.map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function likes(names) {
    if (names === null || !Array.isArray(names) || names.length < 1) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return names[0] +" likes this";  
    } else if (names.length === 2) {
        return names[0] + " and " +names[1]+" like this";
    } else if(names.length === 3) {
        return names[0] + ", " +names[1] +" and " +names[2] +" like this";
    } else if (names.length >= 4) {
        return names[0]+", " + names[1] + " and " +(names.length -2) + " others like this"
    }

  }

  function hero(bullets, dragons){
if ((bullets / 2) >= dragons) {
  return true;
}
  return false;
}

function expandedForm(num) {
    const numString = num.toString();
    const expandedDigits = [];
    
    for (let i = 0; i < numString.length; i++) {
      const index = parseInt(numString[i]);
      
      if (index !== 0) {
        const value = index * Math.pow(10, numString.length - i - 1);
        expandedDigits.push(value.toString());
      }
    }
    return expandedDigits.join(' + ');
  }

function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
        return true;
    }
    return false;
}
function smash (words) {
   return words.join(' ')
};

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function basicOp(operation, value1, value2)
{
  switch (operation) {
      case "+":
      return value1 + value2;
      break;
      case "-":
      return value1 - value2;
      break;
      case "*":
      return value1 * value2;
      break;
      case "/":
      return value1 / value2;
      break;
  }
}
function checkForFactor (base, factor) {
  return (base % factor) ? false : true;
}
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return ((fuelLeft * mpg) >= distanceToPump) ? true : false;
};


function wave(str) {
    const strLength = str.length;
    const result = [];

    for (let i = 0; i < strLength; i++) {
        if(str[i] !==' ') {
            const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(waveStr);
        }
        }

    return result;
}

































*/