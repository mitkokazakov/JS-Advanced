function solve(data) {

    let allFruits = {};
    let bottles = {};

    // Assum all fruit's juice
    for (const fruit of data) {
        let [fruitName, quantity] = fruit.split(' => ');

        if (allFruits.hasOwnProperty(fruitName)) {
            allFruits[fruitName] += Number(quantity);
        }
        else {
            allFruits[fruitName] = Number(quantity);
        }


    }
    // Produce bottles
    for (const key of Object.keys(allFruits)) {
        let currentQuantity = Number(allFruits[key]);

        if (currentQuantity >= 1000) {
            let countBottles = Math.floor(currentQuantity / 1000);
            bottles[key] = countBottles;
        }
    }

    let result = '';

    for (const currFruit of Object.keys(bottles)) {

        result += `${currFruit} => ${bottles[currFruit]}\n`;

    }

    return result.trim();
}

let test1 = ['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'];

let test2 = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'];


console.log(solve(test2));
