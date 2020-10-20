function solve() {

    const button = document.querySelector('button');
    button.addEventListener('click', onclick);

    function onclick() {

        // Get instance of the elements
        const inputElement = document.querySelector('input');
        const inputValue = inputElement.value.toLowerCase();

        const allList = document.getElementsByTagName('li');

        // Take the first letter from the name that has been inserted
        const firstLetter = inputValue[0].toUpperCase();

        // Determine the ASCII code of the first name's letter
        const ASCII = firstLetter.charCodeAt(0);

        // Take the name except the first letter of the name
        const lastPartName = inputValue.substr(1);

        // Concatenate the first letter (upperCase) with the rest of the name
        const correctName = firstLetter + lastPartName;
        

        if (allList[ASCII - 65].textContent === '') {

            allList[ASCII - 65].textContent = correctName;
        }
        else{

            allList[ASCII - 65].textContent += ', ' + correctName;
        }

        inputElement.value = '';

    }

}