function solve() {

    let url = 'http://localhost:8000/schedule/';
    let busID = 'depot';
    let busStop = '';
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    const infoDIV = document.querySelector('span.info');

    function depart() {

        fetch(url + `${busID}.json`).then(response => response.json()).then(data => {

            busStop = data.name;
            infoDIV.textContent = `Next stop ${busStop}`;
            busID = data.next;
        });

        departBtn.disabled = 'true';
        arriveBtn.disabled = false;
    }

    function arrive() {

        //fetch(url + `${busID}.json`).then(response => response.json()).then(data => {

        infoDIV.textContent = `Arriving at ${busStop}`;
        //});

        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();