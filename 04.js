let array = ['Jeans', 'T-Shirt', 'Socks'];
while(true){
let input = prompt('Hi there, wellcome to shop admin pannel, what do you want (C, R, U, D)');

if(input == 'r'){
var newLine = "\r\n"
var b = "The current items are:"

for(let i = 0; i < array.length; i ++){
    b += newLine
    b += (i + 1) + '.'+ array[i]
}
alert(b)

}else if(input == 'c'){
    let name = prompt('Enter the name of the new item');
    array.push(name);
    alert('Done');

}else if(input == 'u'){
    let n = Number(prompt('Enter the position you want to update'));
    let newName = prompt('Enter a new name');
    array[n]= newName;
    alert('Done');

}else if(input == 'd'){
    let c = prompt('Enter the position you want to delete');
    array.splice(c, 1);

}else{
    alert('This command is not supported');
}
}