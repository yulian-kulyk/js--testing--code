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