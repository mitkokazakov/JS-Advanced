function solve() {

    const toConvertElement = document.querySelector('#selectMenuTo');
    const inputElement = document.querySelector('#input');
    const outputElement = document.querySelector('#result');
    const buttonConvert = document.querySelector('button');


    const binaryOption = document.querySelector('#selectMenuTo > option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    toConvertElement.appendChild(hexadecimalOption);

    buttonConvert.addEventListener('click', onClick);

    function onClick() {

        const inputValue = Number(inputElement.value);

        let selectedElement = document.querySelector('#selectMenuTo');

        // Take the choosen option from the option menu
        let currentOption = selectedElement.options[selectedElement.selectedIndex].text;

        let result = '';

        if (currentOption === 'Binary') {

            let temp = inputValue;

            while (temp > 0) {
                if (temp % 2 == 0) {
                    result = "0" + result;
                }
                else {
                    result = "1" + result;
                }

                temp = Math.floor(temp / 2);
            }

        }
        else {
            result = inputValue.toString(16).toUpperCase();
        }

        outputElement.value = result;

    }



}