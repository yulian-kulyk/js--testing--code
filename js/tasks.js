/*
// сума всіх цілих чисел
const a = -3;
const b = 5;
let arr = [];
let result = 0;

for (let i = a; i <= b; i++) {
    arr.push(i);
}
console.log(arr);

//result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8];
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result);


//умовa нерівності трикутників
function isTriangle(a,b,c)
{
  
  if(a + b > c) {
    if(a + c > b) {
        if(b+ c > a) {
            return true;
        }
    }
  }
  return false;
}

console.log(isTriangle(1,2,2));


//kata
function grow(x){    
    let suma;
        for(let i = 0; i < x.length; i++) {
            suma *= x[i];
        }
        return suma;
    }
    
    console.log(grow([1, 2, 3]));

    console.log(oddOrEven([0, 1, 5]));

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


//A = T; T = A; G = C; C = G;

let arr = [];
let data = "AAAAAAAA";

for (let i = 0; i < data.length; i++) {
    arr.push(data[i]);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
        arr[i] = "T";
    }
    else if (arr[i] === 'T') {
        arr[i] = "A";
    }
    if (arr[i] === 'C') {
        arr[i] = "G";
    }
    else if (arr[i] === 'G') {
        arr[i] = "C";
    } 
}

let result = "";

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result);

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

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

console.log(accum("abcd"));    // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // Output: "C-Ww-Aaa-Tttt"

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
//Щоб бути старшим, член повинен бути не менше 55 років і мати гандикап більше 7. 
//У цьому крокетному клубі гандикап коливається від -2 до +26

function openOrSenior(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] >= 7) {
            result.push("Senior");
        } else {result.push("Open");}

    }
    return result;
}
console.log(paperwork(5,5));
console.log(-5 * -5);
//n = classmates m - pages
function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n*m;
    } 
    return 0;
  }
  

































*/