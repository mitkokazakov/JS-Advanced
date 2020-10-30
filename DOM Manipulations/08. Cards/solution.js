function solve() {

    const allCards = [...document.querySelectorAll('img')];
    const resultDiv = document.querySelector('#result');

    const firstSpan = resultDiv.children[0];
    const secondSpan = resultDiv.children[2];

    const historyDIV = document.querySelector('#history');

    const winner = '2px solid green';
    const looser = '2px solid red';

    const whiteCard = 'images/whiteCard.jpg';

    for (const card of allCards) {

        card.addEventListener('click', onClick);
    }

    let counter = 0;

    let firstPlayerCard = null;
    let secondPlayerCard = null;

    let firstValue = 0;
    let secondValue = 0;

    function onClick(e) {

        counter++;

        const currentCard = e.currentTarget;
        const player = e.target.parentElement.id;

        const valueCard = Number(currentCard.name);

        if (player === 'player1Div') {
            firstSpan.textContent = valueCard;
            firstValue = valueCard;
            firstPlayerCard = currentCard;
        } else {
            secondSpan.textContent = valueCard;
            secondValue = valueCard;
            secondPlayerCard = currentCard;
        }

        currentCard.src = whiteCard;

        if (counter === 2) {

            if (firstValue > secondValue) {
                firstPlayerCard.style.border = winner;
                secondPlayerCard.style.border = looser;
            } else if (secondValue > firstValue) {
                secondPlayerCard.style.border = winner;
                firstPlayerCard.style.border = looser;
            }

            firstSpan.textContent = '';
            secondSpan.textContent = '';

            historyDIV.textContent += `[${firstValue} vs ${secondValue}] `;
            counter = 0;
        }
    }

}