function solve(data) {

    let countRotations = Number(data.pop());

    for (let i = 0; i < countRotations; i++) {
        
        let currentRemovedElement= data[data.length - 1];
        data.pop();
        data.unshift(currentRemovedElement);
    }

    let result = data.join(" ");
    return result;
}


let test1 =
    [
        '1',
        '2',
        '3',
        '4',
        '2'
    ];

let test2 =
    [
        'Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15'
    ];

    console.log(solve(test2));
