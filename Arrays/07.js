function solve(data) {

    let rows = data.length;
    let cols = data[0].length;

    let isMagic = true;
    let sumRows = data[0].reduce((a, b) => a + b);
    let currentRowSum = 0;

    for (let i = 0; i < data.length; i++) {
        
        currentRowSum = data[i].reduce((a,b) => a+b);

        if(currentRowSum != sumRows){
            isMagic = false;
            break;
        }
        
    }

    let currentColSum = 0;
    let firstColSum = 0;

    for (let j = 0; j < cols; j++) {
        
        for (let k = 0; k < rows; k++) {
            
            currentColSum += data[j][k];
            
        }
        
        if (j === 0) {
            firstColSum = currentColSum;
        }
        
        if (currentColSum != firstColSum) {
            isMagic = false;
            break;
        }

        
        currentColSum = 0;
    }

    return isMagic;
}

let test1 = [[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]

;

console.log(solve(test1));