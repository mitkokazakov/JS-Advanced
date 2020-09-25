function SameNumbers(number) {

    let numbersArray = String(number).split("").map(x => Number(x));
    let sameNums = true;

    for (let i = 0; i < numbersArray.length - 1; i++) {

        if (numbersArray[0] != numbersArray[i + 1]) {
            sameNums = false;
            break;

        }

    }

    let sumAllNums = numbersArray.reduce((acc, curr) => acc + curr);

    console.log(sameNums);
    console.log(sumAllNums);

}

SameNumbers(1234);