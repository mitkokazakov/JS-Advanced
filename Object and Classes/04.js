function solve(data) {

    const catalog = {};

    for (const line of data) {

        let [product, price] = line.split(' : ');

        let firstLetter = product[0];

        if (!catalog.hasOwnProperty(firstLetter)) {
            catalog[firstLetter] = {};
        }

        catalog[firstLetter][product] = price;

    }
     // First we have to sort the main letters in the catalog (that means we have to sort the keys)
    let sorted = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    let result = ' ';

    for (const key of sorted) {

        result += `${key}\n`;
        // After that we have to sort products for each letter. That means we have to sort the keys of the internal object.
        let sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));

        for (const currProduct of sortedProducts) {
            result += ` ${currProduct}: ${catalog[key][currProduct]}\n`;
        }

    }
    return result;

}


let test1 = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'];

    let test2 = ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'];
    

console.log(solve(test2));
