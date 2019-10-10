let sheeps = [5,7,300,90,24,50, 75];
alert("hello my name is Phuc and here is my sheep size:");
alert(sheeps);
let max = Math.max(...sheeps);
alert("Now my biggest sheep has size : "+ max);
let index = sheeps.indexOf(max);
sheeps[index] = 8;
alert("after shearing, here is my flock: ");
alert(sheeps);
let sum = 0;
for(let x = 0; x < 3; x ++){
    for(let j = 0; j < sheeps.length; j ++){

            sheeps[j] += 50;
            if(x == 2){
                sum += sheeps[j];
            }

    }
    let y = x +1;
    alert("Month " + y);
    alert("One month has passed, my sheeps has grown, here are their sizes: ");
    alert(sheeps);
    if(x <=1) {
        let max = Math.max(...sheeps);
        alert("Now my biggest sheep has size : "+ max);
        alert(sheeps);
        let index = sheeps.indexOf(max);
        sheeps[index] = 8;
        alert("after shearing, here is my flock: ");
        alert(sheeps);
    }
}
alert("My flock has size in total: "+ sum);
let money = sum*2;
alert("I would get "+  sum + "* 2$" + " = "+ money);