function subtract() {

    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;

    const result = Number(firstValue) - Number(secondValue);

    const resultDivElement = document.getElementById('result');

    resultDivElement.innerHTML = result;

    //console.log(resultDivElement.innerHTML = result);
}