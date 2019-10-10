let number = prompt('Enter a squence of Number, separated by commas (,)')
let a = number.split(',');
console.log(a);
let sum = 0;
for(let x = 0; x< a.length; x ++){
    let count = parseInt(a[x]);
    sum += count;
}
alert("the sum of them is: " + sum)