function solve(data) {

    let cars = {};

    for (const line of data) {

        let carInfo = line.split(' | ');
        const carBrand = carInfo[0];
        const carModel = carInfo[1];
        const producedCars = Number(carInfo[2]);

        if (!cars.hasOwnProperty(carBrand)) {

            cars[carBrand] = {};
        }

        if (cars[carBrand].hasOwnProperty(carModel)) {

            cars[carBrand][carModel] += producedCars;
        }
        else {
            cars[carBrand][carModel] = producedCars;
        }


    }

    let result = ' ';

    for (const brand of Object.keys(cars)) {
        result += `${brand}\n`;

        for (const model of Object.keys(cars[brand])) {

            result += `###${model} -> ${cars[brand][model]}\n`;
        }
    }

    return result;
}

let test1 = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'];



console.log(solve(test1));