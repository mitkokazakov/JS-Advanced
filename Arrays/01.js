function solve(data) {
    
    let delimiter = data.pop();

    let result = data.join(delimiter);
    return result;

}

console.log(solve(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five',
        '-']
));