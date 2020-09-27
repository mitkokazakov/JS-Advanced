function solve(params) {

    let number = Number(params[0]);

    for (let i = 1; i < params.length; i++) {

        let currentOperation = params[i];

        if (currentOperation == "chop") {
            number /= 2;

        }
        else if (currentOperation == "dice") {
            number = Math.sqrt(number);

        }
        else if (currentOperation == "spice") {
            number += 1;

        }
        else if (currentOperation == "bake") {
            number *= 3;

        }
        else if (currentOperation == "fillet") {
            number = number - (number * 0.2);
        }

        console.log(number);

    }

}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);