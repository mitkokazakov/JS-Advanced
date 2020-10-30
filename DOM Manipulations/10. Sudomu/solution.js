function solve() {

    const checkButton = document.querySelectorAll('button')[0];
    const clearButton = document.querySelectorAll('button')[1];
    const div = document.querySelector('#check');
    const table = document.querySelector('table');

    const allCells = [...document.querySelectorAll('input')];

    checkButton.addEventListener('click', Check);
    clearButton.addEventListener('click', Clear);

    function Clear(){

        for (let p = 0; p < allCells.length; p++) {
            
            allCells[p].value = '';
            div.children[0].textContent = '';
            table.style.border = "";
        }

    }

    function Check() {

        let currentRow = new Set();
        let currentCol = new Set();

        let counter = 0;
        let isCorrect = true;

        for (let i = 0; i < allCells.length; i++) {

            counter++;
            currentRow.add(allCells[i].value);

            if (counter === 3) {
                counter = 0;


                if (currentRow.size !== 3) {
                    isCorrect = false;
                    div.children[0].textContent = 'NOP! You are not done yet...';
                    table.style.border = "2px solid red";
                    div.children[0].style.color = "red";
                    currentRow = new Set();
                    break;
                }
                currentRow = new Set();
            }
        }

        if (isCorrect === true) {
            for (let j = 0; j < 3; j++) {


                //counter++;
                currentCol.add(allCells[j].value);
                currentCol.add(allCells[j + 3].value);
                currentCol.add(allCells[j + 6].value);

                if (currentCol.size !== 3) {

                    isCorrect = false;
                    div.children[0].textContent = 'NOP! You are not done yet...';
                    table.style.border = "2px solid red";
                    div.children[0].style.color = "red";
                    break;
                }

                currentCol = new Set();
            }
        }

        if (isCorrect === true) {
            div.children[0].textContent = "You solve it! Congratulations!";
            table.style.border = "2px solid green";
            div.children[0].style.color = "green";

        }

    }
}