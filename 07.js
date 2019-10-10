const arr = [3, 4, 6, -9, 10, -88, 2];
let userChoice = Number(prompt("Please enter the number you want to search: "))
for(let x = 0; x < arr.length; x++){
    if(userChoice === arr[x]){
        alert(userChoice + " is found in my array at the index " + x)

    }
}