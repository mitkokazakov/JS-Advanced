function solve(data){

    let isMagic = true;
    let baseSum = data[0].reduce((a,b) => a + b);
    let currentRowSum = 0;
    let currentColSum = 0;

    for (let i = 0; i < data.length; i++) {
        
        currentRowSum = data[i].reduce((a,b) => a + b);
        //console.log(data.map(el => el[i]));
        currentColsSum = data.map(el => el[i]).reduce((a,b) => a + b);

        if (baseSum != currentRowSum || currentColSum != currentColSum) {
            isMagic = false;
            break;
        }
        
    }

    return isMagic;
}

let test1 = [[4, 5, 6],
[6, 5, 4],
[5, 5, 5]];

let test2 = [[11, 32, 45],
[21, 0, 1],
[21, 1, 1]];

console.log(solve(test2));