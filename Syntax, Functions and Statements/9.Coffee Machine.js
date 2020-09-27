function solve(params) {
    let totalIncome = 0;

    for (let i = 0; i < params.length; i++) {

        let price = 0.00;

        let currentOrder = params[i].split(", ");

        let coins = Number(currentOrder[0]);
        let drinkType = currentOrder[1];

        if (drinkType == "tea") {
            price += 0.8;
        }

        if (currentOrder.includes("caffeine")) {
            price += 0.8;
        }
        if (currentOrder.includes("decaf")) {
            price += 0.9;
        }
        if (currentOrder.includes("milk")) {
            price = Number((price * 1.1).toFixed(1));
        }

        let sugarLevel = Number(currentOrder[currentOrder.length - 1]);

        if (sugarLevel > 0) {
            price += 0.1;
        }

        let result;

        if (coins - price < 0) {
            result = `Not enough money for ${drinkType}. Need ${(price - coins).toFixed(2)} more`;
        }
        else{
            result = `You ordered ${drinkType}. Price: ${price.toFixed(2)} Change: ${(coins - price).toFixed(2)}`;
            totalIncome += price;
        }


        console.log(result);
        

    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);