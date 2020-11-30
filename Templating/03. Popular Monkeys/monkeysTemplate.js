import monkeys from './monkeys.js';

window.addEventListener('load', () => {
    const monkeysEl = document.querySelector('.monkeys');

    fetch('./monkeyTempl.hbs').then(templ => templ.text()).
    then(data => {

        const templFunc = Handlebars.compile(data);

        const resultHtml = templFunc({ monkeys });

        console.log(resultHtml);

        monkeysEl.innerHTML = resultHtml;

    })

    monkeysEl.addEventListener('click', onClick);

    function onClick(e) {

        const currentEl = e.target;

        if (currentEl.tagName !== 'BUTTON') {
            return;
        }

        const currP = currentEl.parentNode.querySelector('p');
        currP.style.display = 'block';
    }
})