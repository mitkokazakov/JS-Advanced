window.addEventListener('load', () => {
    const allCats = document.querySelector('#allCats');



    fetch('./cat.hbs').then(catResp => catResp.text())
        .then(catData => {

            let templFunc = Handlebars.compile(catData);

            let resultHTML = templFunc({ cats });

            allCats.innerHTML = resultHTML;

            allCats.addEventListener('click', onClick);
        })


    function onClick(e) {

        const currentElement = e.target;

        if (currentElement.tagName === 'BUTTON') {

            const infoDIV = currentElement.parentElement;
            const statusDIV = infoDIV.querySelector('.status');

            const currentDisplay = statusDIV.style.display;
            if (currentDisplay === 'none') {
                statusDIV.style.display = 'block';
                currentElement.textContent = 'Hide status code';
            } else {
                statusDIV.style.display = 'none';
                currentElement.textContent = 'Show status code';
            }
        }
    }


})