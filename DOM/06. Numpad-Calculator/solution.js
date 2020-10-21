function solve() {

    const allButtons = document.getElementsByTagName('button');
    const expressionElement = document.querySelector('#expressionOutput');
    const outputElement = document.querySelector('#resultOutput');

    const calcNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (const button of allButtons) {

        button.addEventListener('click', onClick);
    }

    let firstNum = '';
    let secondNum = '';
    let operator = '';
    let totalresult = 0;
    let lastOperator = '';

    let isCleared = false;

    function onClick(e) {

        const value = e.target.textContent;

        if (calcNums.includes(value) || value === '.') {

            if (operator === '') {
                firstNum += value;
            }
            else {
                secondNum += value;
            }

        }
        else {
            if (value === '=') {

                if(firstNum === '' || secondNum === '' || operator === ''){
                    outputElement.textContent = 'NaN';
                }
                else{
                    
                    if (lastOperator === '+') {
                        totalresult = Number(firstNum) + Number(secondNum);
                    }
                    else if (lastOperator === '-') {
                        totalresult = Number(firstNum) - Number(secondNum);
                    }
                    else if (lastOperator === 'x') {
                        totalresult = Number(firstNum) * Number(secondNum);
                    }
                    else if (lastOperator === '/') {
                        totalresult = Number(firstNum) / Number(secondNum);
                    }
    
                    outputElement.textContent = totalresult;
                }

                
            }
            else if (value === 'C') {
                expressionElement.textContent = '';
                outputElement.textContent = '';
                isCleared = true;

                 firstNum = '';
                 secondNum = '';
                 operator = '';
                 totalresult = 0;
                 lastOperator = '';
            }
            else {
                operator = value;
                lastOperator = operator;
            }

        }

        if (!isCleared) {
            expressionElement.textContent = `${firstNum} ${operator} ${secondNum}`;

        }

        isCleared = false;


    }

}