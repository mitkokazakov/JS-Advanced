function Fruit(typeFruit,weight,price){

    let kilograms = weight / 1000;
    let moneyNeeded = kilograms * price;
    let result = `I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${typeFruit}.`;

    console.log(result);
}

Fruit('orange', 2500, 1.80);