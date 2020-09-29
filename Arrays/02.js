function solve(data) {

let step = Number(data.pop());

for (let i = 0; i < data.length; i += step) {

    let currentElement = data[i];
   
    console.log(currentElement);
    
}

}

solve(
    [   '5',
        '20',
        '31',
        '4',
        '20',
        '2']
);