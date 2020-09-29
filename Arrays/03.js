function solve(data) {

    let outputArray = [];

    for (let i = 0; i < data.length; i++) {

        let currentCommand = data[i];

        if (currentCommand == "add") {

            outputArray.push(i + 1);

        }
        else if (currentCommand == "remove" && outputArray.length > 0) {

            outputArray.pop();

        }
    }

    let result = outputArray.length == 0 ? 'Empty' : outputArray.join('\n');
    return result;

}

console.log(solve(
    ['remove',
        'remove',
        'remove']



));