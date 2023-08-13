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
