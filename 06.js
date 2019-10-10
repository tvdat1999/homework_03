let number = prompt("Enter a sequence number seperate by commas: ");
let a = number.split(',');
console.log(a);
let temp = parseInt(a[0]);
console.log(temp);
for(let x = 1; x < a.length; x ++){
    let elements = parseInt(a[x]);
    if(elements < temp){
        temp = elements;
    }
    console.log(temp);
}
alert("The smallest element is: " + temp)