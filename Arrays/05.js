function solve(data) {

    let maxNum = -1;
    let outputArray = [];

    for (let i = 0; i < data.length; i++) {

        let currentNumber = data[i];

        if (currentNumber >= maxNum) {
            maxNum = currentNumber;
            outputArray.push(currentNumber);
        }

    }

    let result = outputArray.join('\n');
    return result;

}

let test1 = [1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24];

let test2 = [20, 
    3, 
    2, 
    15,
    6, 
    1] ;

    console.log(solve(test2));
