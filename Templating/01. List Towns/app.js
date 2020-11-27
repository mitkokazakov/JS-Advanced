function towns() {

    const inputTowns = document.querySelector('#towns');
    const loadBtn = document.querySelector('#btnLoadTowns');
    const townsWrapper = document.querySelector('#root');

    loadBtn.addEventListener('click', listTowns);

    function listTowns(e) {

        e.preventDefault();

        const towns = inputTowns.value.split(', ');

        fetch('./template.hbs').then(r => r.text()).then(data => {

            const templFnc = Handlebars.compile(data);
            const html = templFnc({ towns });
            townsWrapper.innerHTML = html;
        });
    }
}

towns();